import { FILTER_EVENTS } from "../types";

export function filterEvents(status) {
  return { type: FILTER_EVENTS, status };
}
