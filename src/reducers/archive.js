import { ARCHIVE_LIST, ARCHIVE_HEAD_TAG } from "../constants/archive";

const INITIAL_STATE = {
  labels: [],
  archiveList: [],
};

export default function archive(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARCHIVE_LIST: {
      return {
        ...state,
        archiveList: action.payload,
        labels: Array.from(
          new Set(
            action.payload.reduce(
              (accum, current) => accum.concat(current.attributes.labels),
              [ARCHIVE_HEAD_TAG]
            )
          )
        ),
      };
    }
    default: {
      return state;
    }
  }
}
