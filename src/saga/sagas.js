import {delay} from "redux-saga";
import {put, takeEvery, all, call} from "redux-saga/effects";
import {plus, PLUS_DELAY} from '../actions/calc'

function * helloSaga() {
    console.log('hello saga')
}

function * plusDelay() {
    yield call(delay, 1000)
    yield put(plus())
}

function * watchPlusDelay() {
    yield takeEvery(PLUS_DELAY, plusDelay)
}

export default function * rootSaga() {
    yield all([helloSaga(), watchPlusDelay()])
}