import { UPDATE_STATES, FETCH_STATES } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STATES:
            return state;
        case UPDATE_STATES:
            return state = action.payload
        default:
            return state
    }
}