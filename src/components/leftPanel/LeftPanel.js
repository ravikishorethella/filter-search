import React, { Component, Fragment } from 'react'
import CountriesList from './CountriesList';
import StatesList from './StatesList';
import CitiesList from './CitiesList';
import countriesListData from '../../data/countries';
import statesListData from '../../data/states';
import citiesListData from '../../data/cities';

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
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
                <div className="field-set">
                    <h4 style={{ textAlign: 'center', marginBottom: '10px', textDecoration: 'underline' }}>City</h4>
                    <CitiesList
                        getSelectedCitiesList={this.props.getSelectedCitiesList}
                        citiesListData={citiesListData}
                        updatedList={this.props.updatedListOfSelectedCities}
                    />
                </div>
            </Fragment>
        )
    }
}

export default LeftPanel;

