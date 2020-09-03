import { graphql } from "@octokit/graphql"
import { REPO_AUTHOR, OWNER, REPOS } from "../constants/auth"

const fetchQL = () => {
  onmessage = async (e) => {
    const { payload, schema } = e.data
    try {
      const { repository } = graphql(schema, {
        owner: OWNER,
        repo: REPOS,
        ...payload
      },
        {
          headers: {
            authorization: `token ${REPO_AUTHOR}`
          }
        });
      console.log(repository)
      postMessage(repository)
    } catch (error) {
      console.log("error", error)
      postMessage(error)
    }
  }
}

let code = fetchQL.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

export default worker_script
