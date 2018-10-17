import React, { Component } from 'react'
import CheckBoxList from '../widgets/CheckBoxList/CheckBoxList';

class CitiesList extends Component {
    render() {
        return (
            <div>
                <CheckBoxList
                    name={"Cities"}
                    getSelectedCheckboxList={this.props.getSelectedCitiesList}
                    checkBoxData={this.props.citiesListData}
                    updatedList={this.props.updatedList}
                />
            </div>
        )
    }
}

export default CitiesList;