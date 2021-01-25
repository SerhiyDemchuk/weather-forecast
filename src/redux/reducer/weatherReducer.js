import { weatherAPI } from '../../api/api';

// const SEND_REQUEST = 'SEND_REQUEST';
const SUCCESSED_REQUEST = 'SUCCESSED_REQUEST';
const FAILED_REQUEST = 'FAILED_REQUEST';

let initialState = {
    request: false,
    main: '',
    weather: '',
    visibility: 0,
    wind: '',
    clouds: '',
    daytime: 0,
    sys: '',
    name: '',
    timezone: 0,
    hideEls: { visibility: 'hidden' }
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSED_REQUEST:
            return {
                ...state,
                request: true,
                main: action.payload.main,
                weather: action.payload.weather,
                visibility: action.payload.visibility,
                wind: action.payload.wind,
                clouds: action.payload.clouds,
                daytime: action.payload.dt,
                sys: action.payload.sys,
                name: action.payload.name,
                timezone: action.payload.timezone,
                hideEls: { visibility: 'visible' }
            }
        case FAILED_REQUEST:
            return {
                ...state,
                main: 'An error occured'
            }
        default:
            return {
                ...state
            }
    }
}

const SUCCESSED_REQUEST_AC = (data) => ({ type: SUCCESSED_REQUEST, payload: data });
const FAILED_REQUEST_AC = () => ({ type: FAILED_REQUEST});

export const getData = (cityName) => async (dispatch) => {
    try {
        let response = await weatherAPI.getWeather(cityName)
        dispatch(SUCCESSED_REQUEST_AC(response))
        console.log(response);
    } catch (error) {
        dispatch(FAILED_REQUEST_AC());
    }
}