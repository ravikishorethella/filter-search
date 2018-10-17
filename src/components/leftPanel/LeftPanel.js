import React, { Component, Fragment } from 'react'
import CountriesList from './CountriesList';
import StatesList from './StatesList';
import countriesListData from '../../data/countries';
import statesListData from '../../data/states';

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
        }
    }
    render() {
        return (
            <Fragment>
                <div className="field-set">
                    <h4 style={{ textAlign: 'center', marginBottom: '10px', textDecoration: 'underline' }}>Country</h4>
                    <CountriesList
                        getSelectedCountriesList={this.props.getSelectedCountriesList}
                        countriesListData={countriesListData}
                        updatedList={this.props.updatedListOfSelectedCountries}
                    />
                </div>
                <div className="field-set">
                    <h4 style={{ textAlign: 'center', marginBottom: '10px', textDecoration: 'underline' }}>State</h4>
                    <StatesList
                        getSelectedStatesList={this.props.getSelectedStatesList}
                        statesListData={statesListData}
                        updatedList={this.props.updatedListOfSelectedStates}
                    />
                </div>
            </Fragment>
        )
    }
}

export default LeftPanel;

