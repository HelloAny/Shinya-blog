import { JRSC } from "../constants/oapi";

import { JRSC_API } from "../constants/api";

import createAction from "../utils/redux";

export const dispatchJRSC = (payload) =>
  createAction({
    type: JRSC,
    url: JRSC_API,
    payload,
  });
