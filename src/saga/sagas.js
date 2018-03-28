import {delay} from "redux-saga";
import {put, takeEvery, all, call} from "redux-saga/effects";
import {plus, PLUS_DELAY} from '../actions/calc'
import {infoRequest, INFO_REQUEST, infoSuccess, INFO_SUCCESS} from '../actions/info'

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

function getInfo() {
    return fetch('https://api.github.com/')
        .then(resp => resp.text())
        .then(text => text)
}

function * info() {
    const result = yield call(getInfo, 'https://api.github.com/')
    yield put(infoSuccess(result))
}

function * watchInfoRequest() {
    yield takeEvery(INFO_REQUEST, info)
}

export default function * rootSaga() {
    yield all([helloSaga(), watchPlusDelay(), watchInfoRequest()])
}