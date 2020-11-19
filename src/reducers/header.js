import {
  HEADER_HIDDEN
} from "../constants/header"

const INITIAL_STATE = {
  hidden: false
}

export default function header(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HEADER_HIDDEN: {
      return {
        ...state,
        hidden: action.payload
      }
    }
    default: {
      return state
    }
  }
}