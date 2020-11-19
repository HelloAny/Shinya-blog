import { graphql } from "@octokit/graphql"
import { REPO_AUTHOR, OWNER, REPOS } from "../constants/auth"
import { ISSUES_LIST, ISSUES_INDEX, ISSUES_MORE } from "../constants/issues"
import { STATUS_400 } from "../constants/status"
import { createBrowserHistory } from 'history';
import { releaseIssuesPinned } from "./util"
const history = createBrowserHistory()
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
    return dispatch(repository, action)
  } catch (error) {
    history.push("/404")
    history.go(0)
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
      history.push("/404")
      history.go(0)
    }
  }
}

export default fetchQL
