export const FETCH_POSTS_REQUEST = 'async/request';

export const FETCH_POSTS_FAILURE = 'async/failure';

export const FETCH_POSTS_SUCCESS = 'async/success';

export const request = () => ({type: FETCH_POSTS_REQUEST})

export const success = (response) => ({type: FETCH_POSTS_SUCCESS, resp: response})

export const error = (error) => ({type: FETCH_POSTS_FAILURE, error})

export function ajax() {
    return function (dispatch) {
        dispatch(request())

        return fetch('https://api.github.com/')
            .then(resp => resp.text())
            .then(text => dispatch(success(text)))
            .catch((e) => {
                dispatch(error('error...'))
            })
    }
}