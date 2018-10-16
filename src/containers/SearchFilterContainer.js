import React, { Component } from 'react'
import * as countryActions from './../actions/countryActions';
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
                        actions={this.props.actions}
                    />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        countryList: state.country
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...countryActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterContainer);