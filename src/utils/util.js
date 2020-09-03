export const releaseIssuesPinned = (issues, pinnedIssue) => {
  const isArray = Array.isArray
  const issueList = !!issues && isArray(issues) ? issues : void 0
  const issuePinned = !!pinnedIssue && isArray(pinnedIssue) ? pinnedIssue : void 0
  console.log("asdfaf")
  if (!!issueList && !!issuePinned) {
    let keys = []
    issuePinned.forEach(itemPinned => {
      issueList.forEach((itemList, index) => {
        if (itemList["databaseId"] === itemPinned["databaseId"]) {
          itemList.pinned = true
          keys.push(itemList)
          issueList.splice(index, 1)
          return
        } else if (!itemList["databaseId"]) {
          throw new Error("databaseId未知！")
        }
      })
    });
    return keys.concat(issueList)
  } else {
    throw new Error(`${issues}|${pinnedIssue}发生未知错误！`)
  }
}