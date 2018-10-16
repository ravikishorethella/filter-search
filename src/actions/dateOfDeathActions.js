import { FETCH_DATEOFDEATH, UPDATE_DATEOFDEATH } from './actionTypes';

export function fetchDateOfDeathList() {
    return {
        type: FETCH_DATEOFDEATH
    }
}

export function updateDateOfDeathList(dateOfDeathDetails) {
    return {
        type: UPDATE_DATEOFDEATH,
        payload: dateOfDeathDetails
    }
}