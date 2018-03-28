import {INFO_REQUEST, INFO_SUCCESS, INFO_ERROR} from "../actions/info";

const initState = {
    loading: false
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case INFO_REQUEST:
            return {
                ...state,
                loading: true,
                info: '',
                error: ''
            }
        case INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.info,
                error: ''
            }
        case INFO_ERROR:
            return {
                ...state,
                loading: false,
                info: '',
                error: action.error
            }
        default:
            return state
    }
}