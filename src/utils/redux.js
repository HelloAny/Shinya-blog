import fetch from './leanRest'

const createAction = (options) => {
  const { type, url, payload, method } = options
  return dispatch => {
    return fetch(url, payload, method).then(res => {
      dispatch({ type, payload: res })
      return res
    })
  }
}

export default createAction