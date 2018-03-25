import {FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from "../actions/async";

const init = {
    loading: false,
    resp: '',
    error: ''
}

export default function reducer(state = init, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
                resp: '',
                error: ''
            }

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                resp: action.resp,
                error: ''
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                resp: '',
                error: action.error
            }
        default:
            return state
    }
}