import {PLUS, MINUS, RESET, INIT} from '../actions/calc'

const init = {}

export default function reducer(state = init, action) {
    switch (action.type) {
        case INIT:
            let id = action.id;
            let data = action.data;
            return {
                ...state,
                [id]: {
                    ...data
                }
            };
        case PLUS:
            let temp = {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    count: state[action.id].count + 1
                }
            }
            return temp;
        case MINUS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.idid],
                    count: state[action.id].count - 1
                }
            }
        case RESET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    count: 0
                }
            }
        default:
            return state;
    }
}