import React from 'react';
import {
    getDataFromApi, 
    updateCityName,
    addHistory
} from './searchAction';


export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.handleCityNameInput = this.handleCityNameInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleCityNameInput(event){
        
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCityName(value));
        
    }

    handleClick(event){

        const { dispatch } = this.props;
        const { cityName } = this.props; 
        dispatch(getDataFromApi(cityName));
        dispatch(addHistory(cityName))
    }

    


    render() {

        const {cityName, cityData, lineItems } = this.props;
        

        return (
          
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={ cityName } onChange={ this.handleCityNameInput }/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={ this.handleClick } >Go!</button>
                </div>
            </div>

        )
    }
}

