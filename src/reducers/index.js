import { combineReducers } from 'redux';
import country from './countryReducer';
import state from './stateReducer';
import city from './cityReducer';
import dateOfBirth from './dateOfBirthReducer';
import dateOfDeath from './dateOfDeathReducer';

export default combineReducers({
    country,
    state,
    city,
    dateOfBirth,
    dateOfDeath
});
