import fetch from './leanRest'
import { requestJRSC } from './request'

import { BLOG, JRSC_API } from '../constants/api'

const createAction = (options) => {
  const { type, url, payload, method } = options
  return dispatch => {
    switch (url) {
      case BLOG: {
        return fetch(url, payload, method).then(res => {
          dispatch({ type, payload: res })
          return res
        })
      }
      case JRSC_API: {
        return requestJRSC(res => { dispatch({ type, payload: res }) })
      }
      default: {
        return null
      }
    }
  }
}

export default createAction