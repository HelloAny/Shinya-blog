import { combineReducers } from "redux";
import post from "./post"
import article from "./article"
import header from './header'

export default combineReducers({
  post,
  article,
  header
})