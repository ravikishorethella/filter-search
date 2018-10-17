import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import * as stateActions from '../actions/stateActions';
import * as cityActions from '../actions/cityActions';
import * as dateOfBirthActions from '../actions/dateOfBirthActions';
import * as dateOfDeathActions from '../actions/dateOfDeathActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftPanel from '../components/leftPanel/LeftPanel';

class LeftPanelContainer extends Component {
    getSelectedCountriesList(listOfSelectedCountries) {
        this.props.actions.updateCountriesList(listOfSelectedCountries)
    }
    getSelectedStatesList(listOfSelectedStates) {
        this.props.actions.updateStatesList(listOfSelectedStates)
    }
    getSelectedCitiesList(listOfSelectedCities) {
        this.props.actions.updateCitiesList(listOfSelectedCities);
    }
    getSelectedDateOfBirthList(listOfSelectedDateOfBirth) {
        this.props.actions.updateDateOfBirthList(listOfSelectedDateOfBirth);
    }
    getSelectedDateOfDeathList(listOfSelectedDateOfDeath) {
        this.props.actions.updateDateOfDeathList(listOfSelectedDateOfDeath)
    }
    render() {
        return (
            <div>
                {
                    <LeftPanel
                        getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
                        getSelectedStatesList={this.getSelectedStatesList.bind(this)}
                        getSelectedCitiesList={this.getSelectedCitiesList.bind(this)}
                        getSelectedDateOfBirthList={this.getSelectedDateOfBirthList.bind(this)}
                        getSelectedDateOfDeathList={this.getSelectedDateOfDeathList.bind(this)}
                        updatedListOfSelectedCountries={this.props.listOfSelectedCountries}
                        updatedListOfSelectedStates={this.props.listOfSelectedStates}
                        updatedListOfSelectedCities={this.props.listOfSelectedCities}
                        updatedListOfSelectedDateOfBirth={this.props.listOfSelectedDateOfBirth}
                        updatedListOfSelectedDateOfDeath={
                            this.props.listOfSelectedDateOfDeath
                        }
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listOfSelectedCountries: state.country,
        listOfSelectedStates: state.state,
        listOfSelectedCities: state.city,
        listOfSelectedDateOfBirth: state.dateOfBirth,
        listOfSelectedDateOfDeath: state.dateOfDeath,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions,
            ...stateActions,
            ...cityActions,
            ...dateOfBirthActions,
            ...dateOfDeathActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelContainer);