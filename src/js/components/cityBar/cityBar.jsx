import React from 'react';
import { getDataFromApi, updateCityName, addHistory } from '../Search/searchAction'

export default class CityBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleCityInfo = this.handleCityInfo.bind(this);

    }

    handleCityInfo(event){
                
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getDataFromApi(value));
        dispatch(updateCityName(value));
        dispatch(addHistory(value));
       
    }
    render() {

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info" value="San Diego" onClick={this.handleCityInfo}>San Diego</button>
                <button type="button" className="btn btn-info" value="New York" onClick={this.handleCityInfo}>New York</button>
                <button type="button" className="btn btn-info" value="Washington DC." onClick={this.handleCityInfo}>Washington D.C</button>
                <button type="button" className="btn btn-info" value="London" onClick={this.handleCityInfo}>London</button>
                <button type="button" className="btn btn-info" value="Tokyo" onClick={this.handleCityInfo}>Tokyo</button>
            </div>
        )
    }
}

