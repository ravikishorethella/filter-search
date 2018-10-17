import React, { Component } from 'react'
import CheckBoxList from '../widgets/CheckBoxList/CheckBoxList';

class StatesList extends Component {
    render() {
        return (
            <div>
                <CheckBoxList
                    name={"States"}
                    getSelectedCheckboxList={this.props.getSelectedStatesList}
                    checkBoxData={this.props.statesListData}
                    updatedList={this.props.updatedList}
                />
            </div>
        )
    }
}

export default StatesList;