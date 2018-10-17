import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import * as stateActions from '../actions/stateActions';
import * as cityActions from '../actions/cityActions';
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
    render() {
        return (
            <div>
                {
                    <LeftPanel
                        getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
                        getSelectedStatesList={this.getSelectedStatesList.bind(this)}
                        getSelectedCitiesList={this.getSelectedCitiesList.bind(this)}
                        updatedListOfSelectedCountries={this.props.listOfSelectedCountries}
                        updatedListOfSelectedStates={this.props.listOfSelectedStates}
                        updatedListOfSelectedCities={this.props.listOfSelectedCities}
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions,
            ...stateActions,
            ...cityActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelContainer);