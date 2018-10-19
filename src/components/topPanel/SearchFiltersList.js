import React, { Component } from 'react'
import TagsInput from 'react-tagsinput';
import { list } from 'postcss';

class SearchFiltersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            filterList: [],
            stateList: [],
            cityList: [],
            dateOfBirthList: [],
            dateOfDeathList: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.listOfSelectedCountries) !== JSON.stringify(nextProps.listOfSelectedCountries)) {
            if (this.state.countryList.length < nextProps.listOfSelectedCountries.length) {
                this.updateFilterList(nextProps.listOfSelectedCountries, 'country');
            } else {
                let optionstoremove = this.state.countryList.filter(item => {
                    return nextProps.listOfSelectedCountries.indexOf(item) === -1 ? item : null
                });
                let tempList = Object.assign([], this.state.filterList);
                tempList.splice(tempList.indexOf("country:" + optionstoremove[0]), 1);
                this.setState({ filterList: tempList });
            }
            this.setState({
                countryList: nextProps.listOfSelectedCountries
            })
        }
        if (JSON.stringify(this.props.listOfSelectedStates) !== JSON.stringify(nextProps.listOfSelectedStates)) {
            if (this.state.stateList.length < nextProps.listOfSelectedStates.length) {
                this.updateFilterList(nextProps.listOfSelectedStates, 'state');
            } else {
                let optionstoremove = this.state.stateList.filter(item => {
                    return nextProps.listOfSelectedStates.indexOf(item) === -1 ? item : null
                });
                let tempList = Object.assign([], this.state.filterList);
                tempList.splice(tempList.indexOf("state:" + optionstoremove[0]), 1);
                this.setState({ filterList: tempList });
            }
            this.setState({
                stateList: nextProps.listOfSelectedStates
            })
        }
        if (JSON.stringify(this.props.listOfSelectedCities) !== JSON.stringify(nextProps.listOfSelectedCities)) {
            if (this.state.cityList.length < nextProps.listOfSelectedCities.length) {
                this.updateFilterList(nextProps.listOfSelectedCities, 'city');
            } else {
                let optionstoremove = this.state.cityList.filter(item => {
                    return nextProps.listOfSelectedCities.indexOf(item) === -1 ? item : null
                });
                let tempList = Object.assign([], this.state.filterList);
                tempList.splice(tempList.indexOf("city:" + optionstoremove[0]), 1);
                this.setState({ filterList: tempList });
            }
            this.setState({
                cityList: nextProps.listOfSelectedCities
            })
        }
        if (JSON.stringify(this.props.listOfSelectedDateOfBirth) !== JSON.stringify(nextProps.listOfSelectedDateOfBirth)) {
            if (this.state.dateOfBirthList.length < nextProps.listOfSelectedDateOfBirth.length) {
                this.updateFilterList(nextProps.listOfSelectedDateOfBirth, 'dateOfBirth');
            } else {
                let optionstoremove = this.state.dateOfBirthList.filter(item => {
                    return nextProps.listOfSelectedDateOfBirth.indexOf(item) === -1 ? item : null
                });
                let tempList = Object.assign([], this.state.filterList);
                tempList.splice(tempList.indexOf("dateOfBirth:" + optionstoremove[0]), 1);
                this.setState({ filterList: tempList });
            }
            this.setState({
                dateOfBirthList: nextProps.listOfSelectedDateOfBirth
            })
        }
        if (JSON.stringify(this.props.listOfSelectedDateOfDeath) !== JSON.stringify(nextProps.listOfSelectedDateOfDeath)) {
            if (this.state.dateOfDeathList.length < nextProps.listOfSelectedDateOfDeath.length) {
                this.updateFilterList(nextProps.listOfSelectedDateOfDeath, 'dateOfDeath');
            } else {
                let optionstoremove = this.state.dateOfDeathList.filter(item => {
                    return nextProps.listOfSelectedDateOfDeath.indexOf(item) === -1 ? item : null
                });
                let tempList = Object.assign([], this.state.filterList);
                tempList.splice(tempList.indexOf("dateOfDeath:" + optionstoremove[0]), 1);
                this.setState({ filterList: tempList });
            }
            this.setState({
                dateOfDeathList: nextProps.listOfSelectedDateOfDeath
            })
        }
    }
    updateFilterList(nextPropValues, field) {
        let listOfFilterValues = this.state.filterList;
        let addedCountries = nextPropValues.filter(item => {
            return listOfFilterValues.indexOf(`${field}:${item}`) === -1
                ? item
                : null;
        });
        let keyValueList = addedCountries.map(item => {
            return `${field}:${item}`;
        });
        this.setState(prevState => ({
            filterList: prevState.filterList.concat(keyValueList)
        }));
    }

    tagsInputChange(output) {
        let countryList = [];
        let stateList = [];
        let cityList = [];
        let dateOfBirthList = [];
        let dateOfDeathList = [];
        this.setState({ filterList: output });
        output.forEach(element => {
            let keyValueList = element.split(':');
            if (keyValueList[0] === 'country') {
                countryList.push(keyValueList[1])
            }
            if (keyValueList[0] === 'state') {
                stateList.push(keyValueList[1])
            }
            if (keyValueList[0] === 'city') {
                cityList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'dateOfBirth') {
                dateOfBirthList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'dateOfDeath') {
                dateOfDeathList.push(keyValueList[1]);
            }
        });
        if (countryList.length !== this.state.countryList.length) {
            this.props.actions.updateCountriesList(countryList);
        }
        if (stateList.length !== this.state.stateList.length) {
            this.props.actions.updateStatesList(stateList);
        }
        if (cityList.length !== this.state.cityList.length) {
            this.props.actions.updateCitiesList(cityList);
        }
        if (dateOfBirthList.length !== this.state.dateOfBirthList.length) {
            this.props.actions.updateDateOfBirthList(dateOfBirthList);
        }
        if (dateOfDeathList.length !== this.state.dateOfDeathList.length) {
            this.props.actions.updateDateOfDeathList(dateOfDeathList);
        }
    }
    render() {
        return (
            <div>
                <TagsInput
                    inputProps={{
                        className: 'react-tagsinput-input custom',
                        placeholder: 'Your Filters:'
                    }}
                    value={this.state.filterList}
                    onlyUnique={true}
                    onChange={this.tagsInputChange.bind(this)}
                />
            </div>
        )
    }
}

export default SearchFiltersList

