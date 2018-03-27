export const PLUS = 'calc/plus'
export const MINUS = 'calc/minus'
export const RESET = 'calc/reset'
export const PLUS_DELAY = 'calc/plus_delay'

export const plus = () => {
    return {type: PLUS}
}

export const minus = () => {
    return {type: MINUS}
}

export const reset = () => {
    return {type: RESET}
}

export const plusDelay = () => {
    return {type: PLUS_DELAY}
}