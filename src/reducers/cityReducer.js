import { FETCH_CITIES, UPDATE_CITIES } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return state;
        case UPDATE_CITIES:
            return state = action.payload
        default:
            return state
    }
}