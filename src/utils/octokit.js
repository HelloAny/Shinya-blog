import { Octokit } from "@octokit/core"
import { STATUS_SUCCESS } from "../constants/status"
import { REPO_AUTHOR } from "../constants/auth"

const octokit = new Octokit({
  auth: REPO_AUTHOR
})  //身份认证，此处不可省略


//REST API
const fetch = async ({ method = "GET", payload, feature }) => {
  const response = await octokit.request(`${method} ${feature}`, payload);
  if (response.status === STATUS_SUCCESS) {
    return response
  } else {
    throw new Error("请求失败")
  }
}

export default fetch