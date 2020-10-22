import { useState, useEffect, useCallback, useReducer } from "react";
import fetchQL from "../utils/octokitQL"
import { ISSUES_LIST, ISSUES_INDEX, ISSUES_MORE } from "../constants/issues"
import { STATUS_400 } from "../constants/status"
import { releaseIssuesPinned } from "../utils/util"


const dataFetchReducer = (state, { action, response }) => {
  if (action === STATUS_400 || !response || response.error) {
    return ""
  }
  switch (action.type) {
    case ISSUES_LIST: {
      return {
        data: releaseIssuesPinned(response.issues.edges.map(item => item), response.pinnedIssues.edges.map(item => item.node.issue))
      }
    }
    case ISSUES_INDEX: {
      return {
        data: response.issue
      }
    }
    case ISSUES_MORE: {
      return {
        noway: response.issues.edges.length === 0 ? true : false,
        data: state.data.concat(releaseIssuesPinned(response.issues.edges.map(item => item),
          response.pinnedIssues.edges.map(item => item.node.issue), 1))
      }

    }
    default: {
      throw new Error("初始化请求失败！")
    }
  }
}
function useFetch(params) {
  const [newParams, setNewParams] = useState(params);
  const [state, dispatch] = useReducer(dataFetchReducer);
  const [loading, setLoading] = useState(false)
  const fetchApi = useCallback(async () => {
    setLoading(false)
    try {
      const res = await fetchQL(newParams)
      dispatch({ action: newParams.action, response: res });
      setLoading(true)
    } catch (e) {
      dispatch(STATUS_400)
    }
  }, [newParams])
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const doFetch = rest => {
    setNewParams(rest);
  }

  const reFetch = () => {
    setNewParams(Object.assign({}, newParams));
  };
  return {
    ...state,
    loading,
    doFetch,
    reFetch
  };
}

export default useFetch;
