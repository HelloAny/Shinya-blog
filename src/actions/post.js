import { POST_LIST, POST_NUMBER, POST_RELOAD } from "../constants/post";

import { BLOG } from "../constants/api";

import createAction from "../utils/redux";

export const dispatchPostList = (payload) =>
  createAction({
    type: POST_LIST,
    url: BLOG,
    payload,
  });

export const dispatchPostQuantity = (payload) =>
  createAction({
    type: POST_NUMBER,
    url: BLOG,
    method: "count",
    payload,
  });

export const dispatchPostReload = (payload) =>
  createAction({
    type: POST_RELOAD,
    url: BLOG,
    payload,
  });
