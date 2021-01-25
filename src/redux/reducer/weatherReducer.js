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
                main: action.data.main,
                weather: action.data.weather[0],
                visibility: action.data.visibility,
                wind: action.data.wind,
                clouds: action.data.clouds,
                daytime: action.data.dt,
                sys: action.data.sys,
                name: action.data.name,
                timezone: action.data.timezone,
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

const SUCCESSED_REQUEST_AC = (data) => ({ type: SUCCESSED_REQUEST, data });
const FAILED_REQUEST_AC = () => ({ type: FAILED_REQUEST});

export const getData = (cityName) => async (dispatch) => {
    try {
        let response = await weatherAPI.getWeather(cityName);
        dispatch(SUCCESSED_REQUEST_AC(response));
    } catch (error) {
        dispatch(FAILED_REQUEST_AC());
    }
}