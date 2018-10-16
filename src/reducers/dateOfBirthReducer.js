import { FETCH_DATEOFBIRTH, UPDATE_DATEOFBIRTH } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DATEOFBIRTH:
            return state;
        case UPDATE_DATEOFBIRTH:
            return state = action.payload
        default:
            return state
    }
}