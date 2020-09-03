//issue_outline schema
const ISSUE_LIST = `fragment issueInfo on Issue {
  databaseId
  number
  title
  createdAt
  updatedAt
  comments(first: 1) {
    nodes {
      bodyText
    }
  }
  labels(first: 5) {
    nodes {
      name
      color
    }
  }
}`

// export const SCHEMA_ISSUESLIST = `query getIssueList($repo: String!, $owner: String!, $first: Int!) {
//   repository(owner: $owner, name: $repo) {
//     issues(first: $first) {
//       edges {
//         node {
//           ...issueInfo
//         }
//         cursor
//       }
//     }
//   }
// }

// ${ISSUE_LIST}
// `

const ISSUES_INDEX = `fragment issueInfo on Issue {
  id
  number
  title
  createdAt
  updatedAt
  body
}`

export const SCHEMA_ISSUES = `query getIssueIndex($repo: String!, $owner: String!, $number: Int!) {
  repository(owner: $owner, name: $repo) {
    issue(number: $number) {
      ...issueInfo
    }
  }
}

${ISSUES_INDEX}
`

export const SCHEMA_ISSUESLIST = `query getIssuesList($repo: String!, $owner: String!, $first: Int!) {
  repository(owner: $owner, name: $repo) {
    pinnedIssues(first: 3) {
      edges {
        node {
          issue {
            databaseId
          }
        }
      }
    }
    issues(first: $first) {
      edges {
        node {
          ...issueInfo
        }
        cursor
      }
    }
  }
}
${ISSUE_LIST}

`
