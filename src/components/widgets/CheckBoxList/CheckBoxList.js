import React, { Component } from 'react'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class CheckBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckboxes: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.updatedList !== nextProps.updatedList) {
            this.setState({
                selectedCheckboxes: nextProps.updatedList
            })
        }

    }
    onCheckboxListChange(listOfCheckedBoxes) {
        this.setState({
            selectedCheckboxes: listOfCheckedBoxes
        })
        this.props.getSelectedCheckboxList(listOfCheckedBoxes)
    }
    render() {
        let checkBoxList = this.props.checkBoxData.map(item => {
            return (
                <label key={item.keyName}>
                    <Checkbox value={item.keyName} /> {item.displayName}
                </label>
            );
        });
        return (
            <div>
                <CheckboxGroup
                    name={this.props.name}
                    value={this.state.selectedCheckboxes}
                    onChange={this.onCheckboxListChange.bind(this)}
                    checkboxDepth={3}
                >
                    {checkBoxList}
                </CheckboxGroup>
            </div>
        )
    }
}

export default CheckBoxList