import React, { Component } from 'react'
import CheckBoxList from '../widgets/CheckBoxList/CheckBoxList';

class CountriesList extends Component {
    render() {
        return (
            <div>
                <CheckBoxList
                    name={"Countries"}
                    getSelectedCheckboxList={this.props.getSelectedCountriesList}
                    checkBoxData={this.props.countriesListData}
                    updatedList={this.props.updatedList}
                />
            </div>
        )
    }
}

export default CountriesList;