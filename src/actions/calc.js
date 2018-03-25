export const PLUS = 'calc/plus'
export const MINUS = 'calc/minus'
export const RESET = 'calc/reset'
export const INIT = 'calc/init'

export const plus = (id) => {
    return {type: PLUS, id}
}

export const init = (action) => {
    return {
        type: INIT,
        ...action
    }
}

export const minus = (id) => {
    return {type: MINUS, id}
}

export const reset = (id) => {
    return {type: RESET, id}
}