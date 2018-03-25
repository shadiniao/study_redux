export const PLUS = 'calc/plus'
export const MINUS = 'calc/minus'
export const RESET = 'calc/reset'

export const plus = () => {
    return {type: PLUS}
}

export const minus = () => {
    return {type: MINUS}
}

export const reset = () => {
    return {type: RESET}
}