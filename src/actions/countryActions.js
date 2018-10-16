import { FETCH_COUNTRIES, UPDATE_COUNTRIES } from './actionTypes';

export function fetchCountriesList() {
    return {
        type: FETCH_COUNTRIES
    }
}

export function updateCountriesList(countryDetails) {
    return {
        type: UPDATE_COUNTRIES,
        payload: countryDetails
    }
}