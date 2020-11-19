import {
  ARTICLE_INDEX
} from "../constants/article"

const INITIAL_STATE = {
  articleInfo: ''
}

export default function article(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARTICLE_INDEX: {
      return {
        ...state,
        articleInfo: action.payload.shift()
      }
    }
    default: {
      return state
    }
  }
}