import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftPanel from '../components/leftPanel/LeftPanel';

class LeftPanelContainer extends Component {
    getSelectedCountriesList(listOfSelectedCountries) {
        this.props.actions.updateCountriesList(listOfSelectedCountries)
    }
    render() {
        return (
            <div>
                {
                    <LeftPanel
                        getSelectedCountriesList={this.getSelectedCountriesList.bind(this)}
                        updatedListOfSelectedCountries={this.props.listOfSelectedCountries}
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        listOfSelectedCountries: state.country
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanelContainer);