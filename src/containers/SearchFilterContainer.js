import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import * as stateActions from '../actions/stateActions';
import * as cityActions from '../actions/cityActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFiltersList from '../components/topPanel/SearchFiltersList'

class SearchFilterContainer extends Component {
    render() {
        return (
            <div>
                {
                    <SearchFiltersList
                        listOfSelectedCountries={this.props.countryList}
                        listOfSelectedStates={this.props.stateList}
                        listOfSelectedCities={this.props.cityList}
                        actions={this.props.actions}
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        countryList: state.country,
        stateList: state.state,
        cityList: state.city
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions,
            ...stateActions,
            ...cityActions,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterContainer);