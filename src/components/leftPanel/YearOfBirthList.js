import React, { Component } from 'react'
import CheckBoxList from '../widgets/CheckBoxList/CheckBoxList';

class DateOfBirthList extends Component {
    render() {
        return (
            <div>
                <CheckBoxList
                    name={"DateOfBirth"}
                    getSelectedCheckboxList={this.props.getSelectedDateOfBirthList}
                    checkBoxData={this.props.yearOfBirthListData}
                    updatedList={this.props.updatedList}
                />
            </div>
        )
    }
}

export default DateOfBirthList