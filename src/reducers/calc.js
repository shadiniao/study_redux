import {PLUS, MINUS, RESET} from '../actions/calc'

const init = {
    count: 0
}

export default function reducer(state = init, action) {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                count: state.count + 1
            }
        case MINUS:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}