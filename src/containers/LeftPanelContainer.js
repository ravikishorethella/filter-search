import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import * as stateActions from '../actions/stateActions';
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
    render() {
        return (
            <div>
                {
                    <LeftPanel
                        getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
                        getSelectedStatesList={this.getSelectedStatesList.bind(this)}
                        updatedListOfSelectedCountries={this.props.listOfSelectedCountries}
                        updatedListOfSelectedStates={this.props.listOfSelectedStates}
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions,
            ...stateActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelContainer);