import React, { Component } from 'react'
import CheckBoxList from '../widgets/CheckBoxList/CheckBoxList';

class DateOfDeathList extends Component {
    render() {
        return (
            <div>
                <CheckBoxList
                    name={"DateOfDeath"}
                    getSelectedCheckboxList={this.props.getSelectedDateOfDeathList}
                    checkBoxData={this.props.yearOfDeathListData}
                    updatedList={this.props.updatedList}
                />
            </div>
        )
    }
}

export default DateOfDeathList