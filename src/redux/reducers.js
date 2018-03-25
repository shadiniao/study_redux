import calc from "../reducers/calc";
import async from "../reducers/async";

/*
export default function reducers(state = {}, action) {
    return {
        calc : calc(state.calc, action),
        async: async(state.async, action)
    }
}
 */

import {combineReducers} from "redux";

export default combineReducers({calc, async})