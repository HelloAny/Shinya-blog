import { ISSUES_LIST, ISSUES_INDEX } from "../constants/issues"
import { releaseIssuesPinned } from "./util"
const resolveResponse = (action, response) => {
  if (response.error) {
    return ""
  }
  switch (action.type) {
    case ISSUES_LIST: {
      return releaseIssuesPinned(response.issues.edges.map(item => item.node),
        response.pinnedIssues.edges.map(item => item.node.issue))
    }
    case ISSUES_INDEX: {
      return response.issue
    }
    default: {
      throw new Error("初始化请求失败！")
    }
  }
}

export default resolveResponse