import React, { Component, Fragment } from 'react'
import CountriesList from './CountriesList';
import countriesList from './../../data/countries';

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }
    render() {
        return (
            <Fragment>
                <div className="field-set">
                    <h4 style={{ textAlign: 'center', marginBottom: '10px', textDecoration: 'underline' }}></h4>
                    <CountriesList
                        getSelectedCountriesList={this.props.getSelectedCountriesList}
                        countriesListData={countriesList}
                        updatedList={this.props.updatedListOfSelectedCountries}
                    />
                </div>
            </Fragment>
        )
    }
}

export default LeftPanel;

