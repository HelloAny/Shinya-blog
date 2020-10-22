export const releaseIssuesPinned = (issues, pinnedIssue, solo = -1) => {
  const issueList = !!issues && Array.isArray(issues) ? issues : []
  const issuePinned = !!pinnedIssue && Array.isArray(pinnedIssue) ? pinnedIssue : []
  if (!!issueList && !!issuePinned) {
    const keys = issueList.filter(item => {
      let result = true
      issuePinned.forEach(pinEl => {
        pinEl.pinned = true
        if (pinEl["databaseId"] === item.node["databaseId"]) {
          result = false
        }
      })
      return result
    }).map(item => { item.node.cursor = item.cursor; return item.node })
    return solo === -1 ? issuePinned.concat(keys.reverse()) : keys.reverse()
  } else {
    throw new Error(`${issues}|${pinnedIssue}发生未知错误！`)
  }
}

