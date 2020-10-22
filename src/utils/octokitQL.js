import { graphql } from "@octokit/graphql"
import { REPO_AUTHOR, OWNER, REPOS } from "../constants/auth"
import { ISSUES_LIST, ISSUES_INDEX, ISSUES_MORE } from "../constants/issues"
import { STATUS_400 } from "../constants/status"
import { releaseIssuesPinned } from "./util"

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${REPO_AUTHOR}`,
  },
});
const fetchQL = async (params) => {
  const { payload, schema, action } = params
  try {
    const { repository } = await graphqlWithAuth(schema, {
      owner: OWNER,
      repo: REPOS,
      ...payload
    });
    console.log("reponsitory", repository)
    return dispatch(repository, action)
  } catch (error) {
    throw new Error("请求失败")
  }
}

const dispatch = (response, action) => {
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
        noway: releaseIssuesPinned(response.issues.edges.map(item => item),
          response.pinnedIssues.edges.map(item => item.node.issue), 1).length === 0 ? true : false,
        data: releaseIssuesPinned(response.issues.edges.map(item => item),
          response.pinnedIssues.edges.map(item => item.node.issue), 1)
      }
    }
    default: {
      throw new Error("初始化请求失败！")
    }
  }
}

export default fetchQL
