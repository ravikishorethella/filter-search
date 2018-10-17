import React, { Component } from 'react'
import * as countryActions from '../actions/countryActions';
import * as stateActions from '../actions/stateActions';
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions,
            ...stateActions,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterContainer);