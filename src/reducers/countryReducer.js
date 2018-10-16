import { FETCH_COUNTRIES, UPDATE_COUNTRIES } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return state;
        case UPDATE_COUNTRIES:
            return state = action.payload
        default:
            return state
    }
}