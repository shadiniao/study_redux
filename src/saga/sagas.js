import {delay} from "redux-saga";
import {put, takeEvery, all, call} from "redux-saga/effects";
import {plus, PLUS_DELAY} from '../actions/calc'
import {infoRequest, INFO_REQUEST, infoSuccess, INFO_SUCCESS, infoError} from '../actions/info'

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
    return fetch('https://api22.github.com/')
        .then(resp => resp.text())
        .then(text => text)
}

function * info() {
    try {
        const result = yield call(getInfo)
        yield put(infoSuccess(result))
    } catch (ex) {
        yield put(infoError(ex))
    }
}

function * watchInfoRequest() {
    yield takeEvery(INFO_REQUEST, info)
}

export default function * rootSaga() {
    yield all([helloSaga(), watchPlusDelay(), watchInfoRequest()])
}