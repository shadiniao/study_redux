import {createStore, combineReducers} from "redux";
import reducers from "./reducers";
import {reducer as formReducer} from "redux-form";

export const store = createStore(combineReducers({calc: reducers, form: formReducer}))