import { FETCH_STATES, UPDATE_STATES } from './actionTypes';

export function fetchStatesList() {
    return {
        type: FETCH_STATES
    }
}

export function updateStatesList(stateDetails) {
    return {
        type: UPDATE_STATES,
        payload: stateDetails
    }
}