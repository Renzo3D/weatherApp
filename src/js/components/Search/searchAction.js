import axios from 'axios';

export function getDataFromApi(cityName) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c4ffef6183d8aa7bdca35e48d737dc78`
    
    return {
    
        type: 'GET_WEATHER',
        payload: axios.get(url)
        .then(response => response.data)
        .catch(error =>  console.log(error))
    };
}



export function updateCityName(inputValue) {
    return {
        type: 'UPDATE_CITYNAME_VALUE',
        payload: { inputValue }
    };
}

export function addHistory(inputValue) {
    return {
        type: 'ADD_HISTORY',
        payload: { 
            cityName: inputValue,
            date: new Date()
        }
    }
}



// export function addCity(inputValue) {
//     return {
//         type: 'ADD_CITY',
//         payload: inputValue
//     }
// }