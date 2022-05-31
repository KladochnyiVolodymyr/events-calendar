import { INIT_EVENTS } from "../types";

const initState = {
  events: [],
};

export const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_EVENTS:
      return { ...state, events: action.events };
    default:
      return state;
  }
};
