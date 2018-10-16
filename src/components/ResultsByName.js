import React, { Component, Fragment } from 'react'
import LeftPanelContainer from '../containers/LeftPanelContainer';
import SearchFilterContainer from '../containers/SearchFilterContainer';

class ResultsByName extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <SearchFilterContainer />
                </div>
                <div className="leftrail">
                    <LeftPanelContainer />
                </div>
            </Fragment>
        )
    }
}

export default ResultsByName;