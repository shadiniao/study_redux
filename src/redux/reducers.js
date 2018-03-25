import calc from "../reducers/calc";

export default function reducers(state = {}, action) {
    return {
        calc : calc(state.calc, action)
    }
}