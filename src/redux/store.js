import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";

import rootSaga from "../saga/sagas";

import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(saga))

saga.run(rootSaga)

export {store}