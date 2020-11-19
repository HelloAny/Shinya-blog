import {
  ARTICLE_INDEX
} from '../constants/article'

import {
  BLOG
} from "../constants/api"

import createAction from '../utils/redux'

export const dispatchArticleIndex = payload =>
  createAction({
    type: ARTICLE_INDEX,
    url: BLOG,
    payload
  })