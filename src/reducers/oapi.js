import {
  JRSC
} from "../constants/oapi"

const INITIAL_STATE = {
  jrsc: ''
}

export default function oapi(state = INITIAL_STATE, action) {
  switch (action.type) {
    case JRSC: {
      return {
        ...state,
        jrsc: action.payload.data.content
      }
    }
    default: {
      return state
    }
  }
}