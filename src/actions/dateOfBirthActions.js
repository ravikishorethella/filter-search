import { FETCH_DATEOFBIRTH, UPDATE_DATEOFBIRTH } from './actionTypes';

export function fetchDateOfBirthList() {
    return {
        type: FETCH_DATEOFBIRTH
    }
}

export function updateDateOfBirthList(dateOfBirthDetails) {
    return {
        type: UPDATE_DATEOFBIRTH,
        payload: dateOfBirthDetails
    }
}