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
            this.updateFilterList(nextProps.listOfSelectedCountries, 'country');
            this.setState({
                countryList: nextProps.listOfSelectedCountries
            })
        }
        if (JSON.stringify(this.props.listOfSelectedStates) !== JSON.stringify(nextProps.listOfSelectedStates)) {
            this.updateFilterList(nextProps.listOfSelectedStates, 'state');
            this.setState({
                stateList: nextProps.listOfSelectedStates
            })
        }
        if (JSON.stringify(this.props.listOfSelectedCities) !== JSON.stringify(nextProps.listOfSelectedCities)) {
            this.updateFilterList(nextProps.listOfSelectedCities, 'city');
            this.setState({
                cityList: nextProps.listOfSelectedCities
            })
        }
        if (JSON.stringify(this.props.listOfSelectedDateOfBirth) !== JSON.stringify(nextProps.listOfSelectedDateOfBirth)) {
            this.updateFilterList(nextProps.listOfSelectedDateOfBirth, 'dateOfBirth');
            this.setState({
                dateOfBirthList: nextProps.listOfSelectedDateOfBirth
            })
        }
        if (JSON.stringify(this.props.listOfSelectedDateOfDeath) !== JSON.stringify(nextProps.listOfSelectedDateOfDeath)) {
            this.updateFilterList(nextProps.listOfSelectedDateOfDeath, 'dateOfDeath');
            this.setState({
                dateOfDeathList: nextProps.listOfSelectedDateOfDeath
            })
        }
    }
    updateFilterList(nextPropValues, field) {
        let listOfFilterValues = this.state.filterList;
        let addedCountries = nextPropValues.filter(item => {
            return listOfFilterValues.indexOf(`${field}:${item}`) === -1 ? item : null
        });
        let keyValueList = addedCountries.map(item => {
            return `${field}:${item}`
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

