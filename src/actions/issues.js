import { SCHEMA_ISSUESLIST, SCHEMA_ISSUES } from "../schema/issue"
import { ISSUES_LIST, ISSUES_INDEX } from "../constants/issues"


export const ISSUESLIST = (payload) =>
  ({
    action: {
      type: ISSUES_LIST
    },
    payload: {
      headers: {
        Accept: 'application/vnd.github.elektra-preview+json'
      },
      ...payload
    },
    schema: SCHEMA_ISSUESLIST
  })

export const ISSUESINDEX = (payload) =>
  ({
    action: {
      type: ISSUES_INDEX
    },
    payload,
    schema: SCHEMA_ISSUES
  })

// export const ISSUESPINNED = () =>
//   ({
//     action: {
//       type: ISSUES_PINNED
//     },
//     payload: {
//       headers: {
//         Accept: 'application/vnd.github.elektra-preview+json'
//       }
//     },
//     schema: SCHEMA_ISSUESPINNED
//   })