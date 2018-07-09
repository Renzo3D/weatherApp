//import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const defaultState = {
    cityName: '',
    cityData: null, 
    lineItems: []
};

export default function searchReducer(state = defaultState, action) {

    const { type, payload } = action;

    switch (type) {
        // case 'GET_WEATHER_PENDING': {
        //     return {
        //     }
        // }
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                cityData: payload
            }
        }

        case 'GET_WEATHER_REJECTED': {
            return {
                ...state,
                message: 'City not found'
            }
        }

        case 'UPDATE_CITYNAME_VALUE': {
            return {
                ...state,
                cityName: payload.inputValue
            }
        }

        case 'ADD_HISTORY': {
            return {
                ...state,
                lineItems: [
                    ...state.lineItems,
                       payload
                       
                ]
            };
        }

        default: {
            return state;
        }

    }
    // the `state = defaultState` above is new ES6 syntax
    // for defining a default value on a parameter
}
