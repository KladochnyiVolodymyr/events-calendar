import { INIT_EVENTS } from "../types";
import {fakeEvents} from '../../data'

export function initEvents() {
    return { type: INIT_EVENTS, events: fakeEvents }
}