import { POST_LIST, POST_NUMBER, POST_RELOAD } from "../constants/post";

const INITIAL_STATE = {
  postList: [],
  quantity: 0,
  more: false,
  pageIndex: 1,
};

export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_LIST: {
      return {
        ...state,
        postList: action.payload,
      };
    }
    case POST_NUMBER: {
      return {
        ...state,
        quantity: parseInt(action.payload),
      };
    }
    case POST_RELOAD: {
      let m = false,
        len = action.payload.length + state.postList.length;
      if (len >= state.quantity) {
        m = true;
      }
      return {
        ...state,
        more: m,
        pageIndex: ++state.pageIndex,
        postList: state.postList.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
