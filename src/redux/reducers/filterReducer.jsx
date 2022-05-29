import { FILTER_EVENTS } from "../types";

const initState = {
  filterType: "meeting",
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_EVENTS:
      return {
        ...state,
        filterType: action.status,
      };
    default:
      return state;
  }
};
