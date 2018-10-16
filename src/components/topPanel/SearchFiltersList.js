// import React, { Component } from 'react'
// import TagsInput from 'react-tagsinput';
// import { list } from 'postcss';

// class SearchFiltersList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             countryList: [],
//             filterList: []
//         }
//     }
//     componentWillReceiveProps(nextProps) {
//         if (JSON.stringify(this.props.listOfSelectedCountries) !== JSON.stringify(nextProps.listOfSelectedCountries)) {
//             this.updateFilterList(nextProps.listOfSelectedCountries, 'country');
//             this.setState({
//                 countryList: nextProps.listOfSelectedCountries
//             })
//         }
//     }
//     updateFilterList(nextPropValues, field) {
//         let listOfFilterValues = this.state.filterList;
//         let addedCountries = nextPropValues.filter(item => {
//             return listOfFilterValues.indexOf(`${field}:${item}`) === -1 ? item : null
//         });
//         let keyValueList = addedCountries.map(item => {
//             return `${field}:${item}`
//         });
//         this.setState(prevState => ({
//             filterList: prevState.filterList.concat(keyValueList)
//         }));
//     }
//     tagsInputChange(output) {
//         let countryList = [];
//         this.setState({ filterList: output });
//         output.forEach(element => {
//             let keyValueList = element.split(':');
//             if (keyValueList[0] === 'country') {
//                 countryList.push(keyValueList[1])
//             }
//         });
//         if (countryList.length !== this.state.countryList.length) {
//             this.props.actions.updateCountriesList(countryList);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <TagsInput
//                     inputProps={{
//                         className: 'react-tagsinput-input custom',
//                         placeholder: 'Your Filters:'
//                     }}
//                     value={this.state.filterList}
//                     onlyUnique={true}
//                     onChange={this.tagsInputChange.bind(this)}
//                 />
//             </div>
//         )
//     }
// }

// export default SearchFiltersList

import React from 'react';
import TagsInput from 'react-tagsinput';

class SearchFiltersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: [],
            countryList: [],
            cityList: [],
            dateOfBirthList: [],
            dateOfDeathList: [],
            stateList: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (
            JSON.stringify(this.props.listOfSelectedCountries) !==
            JSON.stringify(nextProps.listOfSelectedCountries)
        ) {
            this.updateFilterList(nextProps.listOfSelectedCountries, 'country');
            this.setState({ countryList: nextProps.listOfSelectedCountries });
        }

        if (
            JSON.stringify(this.props.listOfSelectedCities) !==
            JSON.stringify(nextProps.listOfSelectedCities)
        ) {
            this.updateFilterList(nextProps.listOfSelectedCities, 'city');
            this.setState({ cityList: nextProps.listOfSelectedCities });
        }

        if (
            JSON.stringify(this.props.listOfSelectedDateOfBirthList) !==
            JSON.stringify(nextProps.listOfSelectedDateOfBirthList)
        ) {
            this.updateFilterList(
                nextProps.listOfSelectedDateOfBirthList,
                'dateofbirth'
            );
            this.setState({
                dateOfBirthList: nextProps.listOfSelectedDateOfBirthList
            });
        }

        if (
            JSON.stringify(this.props.listOfSelectedDateOfDeathList) !==
            JSON.stringify(nextProps.listOfSelectedDateOfDeathList)
        ) {
            this.updateFilterList(
                nextProps.listOfSelectedDateOfDeathList,
                'dateofdeath'
            );
            this.setState({
                dateOfDeathList: nextProps.listOfSelectedDateOfDeathList
            });
        }

        if (
            JSON.stringify(this.props.listOfSelectedStatesList) !==
            JSON.stringify(nextProps.listOfSelectedStatesList)
        ) {
            this.updateFilterList(nextProps.listOfSelectedStatesList, 'state');
            this.setState({ stateList: nextProps.listOfSelectedStatesList });
        }
    }

    updateFilterList(nextPropValues, field) {
        let listOfFilterValues = this.state.filterList;
        let addedCountries = nextPropValues.filter(item => {
            // if (listOfFilterValues.indexOf(`${field}:${item}`) === -1) {
            //   return item;
            // }
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
        let cityList = [];
        let dateOfBirthList = [];
        let dateOfDeathList = [];
        let stateList = [];
        this.setState({ filterList: output });
        output.forEach(element => {
            let keyValueList = element.split(':');
            if (keyValueList[0] === 'country') {
                countryList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'city') {
                cityList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'dateofbirth') {
                dateOfBirthList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'dateofdeath') {
                dateOfDeathList.push(keyValueList[1]);
            }
            if (keyValueList[0] === 'state') {
                stateList.push(keyValueList[1]);
            }
        });
        if (countryList.length !== this.state.countryList.length) {
            this.props.actions.updateCountriesList(countryList);
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
        if (stateList.length !== this.state.stateList.length) {
            this.props.actions.updateStatesList(stateList);
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
        );
    }
}
export default SearchFiltersList;
