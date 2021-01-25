import React, { useState } from 'react';
import { getData } from '../../redux/reducer/weatherReducer';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';
import s from './WeatherDisplay.css';

const WeatherDisplayContainer = (props) => {

    let [inpVal, setInpVal] = useState();

    const getCity = (e) => {
        setInpVal(e.target.value);
    }

    // const {temp, feels_like, temp_min, temp_max, pressure, humidity} = props.main;

    return (
        <div>
            <div className={s.status}>
                <h1>Active Games</h1>
                <input onChange={getCity} type="text" />
                <button onClick={() => props.getData(inpVal)}>Click</button>
            </div>
            <WeatherDisplay
                name={props.name}
                visibility={props.visibility}
                timezone={props.timezone}
                daytime={props.daytime}
                hideEls={props.hideEls}
                main={props.main}
                sys={props.sys}
                weather={props.weather}
                request={props.request}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    request: state.request,
    main: state.main,
    name: state.name,
    weather: state.weather,
    visibility: state.visibility,
    wind: state.wind,
    clouds: state.clouds,
    daytime: state.daytime,
    sys: state.sys,
    timezone: state.timezone,
    hideEls: state.hideEls
})

export default connect(mapStateToProps, { getData })(WeatherDisplayContainer);