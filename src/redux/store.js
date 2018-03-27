import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";

// export const store = createStore(reducers)
/* 第一步
function addLog(store) {
    const next = store.dispatch
    store.dispatch = function dispatchAndLog(action) {
        console.log('dispatching', action)
        const result = next(action)
        console.log('next state', store.getState())
        console.log('result', result)
        return result
    }
}

function addTime(store) {
    const next = store.dispatch
    store.dispatch = function dispatchAndTime(action) {
        const begin = new Date()
        const result = next(action)
        const end = new Date()
        const diff = end.getTime() - begin.getTime()
        console.log(diff)
        return result
    }
}

addLog(store)
addTime(store)
 */

/* 第二步
function addLog(store) {
    const next = store.dispatch
    return function dispatchAndLog(action) {
        console.log('dispatching', action)
        const result = next(action)
        console.log('next state', store.getState())
        console.log('result', result)
        return result
    }
}

function addTime(store) {
    const next = store.dispatch
    return function dispatchAndTime(action) {
        const begin = new Date()
        const result = next(action)
        const end = new Date()
        const diff = end.getTime() - begin.getTime()
        console.log(diff)
        return result
    }
}

function addMiddleware(store, middlewares) {
    middlewares.forEach(middle => {
        store.dispatch = middle(store)
    });
}

addMiddleware(store, [addLog, addTime])
 */

/*
function addLog(store) {
    return function wrap(next) {
        return function dispatchAndLog(action) {
            console.log('dispatching', action)
            const result = next(action)
            console.log('next state', store.getState())
            console.log('result', result)
            return result
        }
    }
}

function addTime(store) {
    return function (next) {
        return function dispatchAndTime(action) {
            const begin = new Date()
            const result = next(action)
            const end = new Date()
            const diff = end.getTime() - begin.getTime()
            console.log(diff)
            return result
        }
    }
}
 */
/* 第四步
const addLog = store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.log('result', result)
    return result
}

const addTime = store => next => action => {
    const begin = new Date()
    const result = next(action)
    const end = new Date()
    const diff = end.getTime() - begin.getTime()
    console.log(diff)
    return result
}

function addMiddleware(store, middlewares) {
    let dispatch = store.dispatch
    middlewares.forEach(middle => {
        dispatch = middle(store)(dispatch)
    });

    store.dispatch = dispatch
}

addMiddleware(store, [addLog, addTime])
 */

const addLog = store => next => action => {
    console.log('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.log('result', result)
    return result
}

const addTime = store => next => action => {
    const begin = new Date()
    const result = next(action)
    const end = new Date()
    const diff = end.getTime() - begin.getTime()
    console.log(diff)
    return result
}

export const store = createStore(reducers, applyMiddleware(addLog, addTime))