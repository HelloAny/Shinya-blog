import {
  ARCHIVE_LIST
} from '../constants/archive'

import {
  BLOG
} from "../constants/api"

import createAction from '../utils/redux'

export const dispatchArchiveList = payload =>
  createAction({
    type: ARCHIVE_LIST,
    url: BLOG,
    payload: {
      ...payload,
      select: ['title', 'id', 'ct', 'labels'],
      pin: false
    }
  })
