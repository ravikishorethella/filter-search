import { FETCH_DATEOFDEATH, UPDATE_DATEOFDEATH } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DATEOFDEATH:
            return state;
        case UPDATE_DATEOFDEATH:
            return state = action.payload;
        default:
            return state;
    }
};
