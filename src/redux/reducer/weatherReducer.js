import { weatherAPI } from '../../api/api';

const SUCCESSED_REQUEST = 'SUCCESSED_REQUEST';
const FAILED_REQUEST = 'FAILED_REQUEST';

let initialState = {
    temperature: '',
    cityName: '',

}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSED_REQUEST:
            return {
                ...state,
                temperature: action.payload.main.temp,
                cityName: action.payload.name
            }
        case FAILED_REQUEST:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

const SUCCESSED_REQUEST_AC = (data) => ({ type: SUCCESSED_REQUEST, payload: data});
// const FAILED_REQUEST_AC = (data) => ({ type: FAILED_REQUEST, payload: data});

export const getData = (cityName) => (dispatch) => {
    weatherAPI.getWeather(cityName).then(response => {
        dispatch(SUCCESSED_REQUEST_AC(response))
        console.log(response);
    })
}