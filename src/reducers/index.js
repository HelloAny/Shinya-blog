import { combineReducers } from "redux";
import post from "./post";
import article from "./article";
import header from "./header";
import oapi from "./oapi";
import archive from "./archive";

export default combineReducers({
  post,
  article,
  header,
  oapi,
  archive,
});
