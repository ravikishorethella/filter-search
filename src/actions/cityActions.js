import { FETCH_CITIES, UPDATE_CITIES } from './actionTypes';

export function fetchCitiesList() {
    return {
        type: FETCH_CITIES
    }
}

export function updateCitiesList(cityDetails) {
    return {
        type: UPDATE_CITIES,
        payload: cityDetails
    }
}