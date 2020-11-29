import { combineReducers } from "redux";
import post from "./post"
import article from "./article"
import header from './header'
import oapi from './oapi'

export default combineReducers({
  post,
  article,
  header,
  oapi
})