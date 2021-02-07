import { HEADER_HIDDEN } from "../constants/header";

export const dispatchTriggerHeader = (payload) => ({
  type: HEADER_HIDDEN,
  payload,
});
