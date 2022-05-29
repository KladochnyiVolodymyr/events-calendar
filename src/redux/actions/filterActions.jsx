import { FILTER_EVENTS } from "../types";

export function filterEvents(status) {
  return (dispatch) => {
    dispatch({ type: FILTER_EVENTS, status });
  };
}
