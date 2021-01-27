import React, { useEffect, useState } from 'react';
import { getData } from '../../redux/reducer/weatherReducer';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';
import s from './WeatherDisplay.module.css';

const WeatherDisplayContainer = (props) => {

    let [inpVal, setInpVal] = useState();

    const typeCity = (e) => {
        setInpVal(e.target.value);
    }

    useEffect(() => {
    }, [props.request]);

    const convertTemp = (obj, key) => {
        for (let values in obj) {
            if (values === key) {
                return Math.round(obj[values] - 273.15);
            }
        }
    }

    const convertTime = (obj) => {
        let seconds = Math.floor((obj / 1000) % 60);
        let minutes = Math.floor((obj / (1000 * 60)) % 60);
        let hours = Math.floor((obj / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    return (
        <div className={s.showError}>
            <div className={s.typeInfo}>
                <input placeholder="Type city..." onChange={typeCity} type="text" />
                <button onClick={() => props.getData(inpVal)}>Search</button>
            </div>
            { props.request
                ? <div>
                    <WeatherDisplay
                        name={props.name}
                        visibility={props.visibility}
                        timezone={props.timezone}
                        daytime={props.daytime}
                        hideEls={props.hideEls}
                        sys={props.sys}
                        weather={props.weather}
                        convertTemp={convertTemp}
                        main={props.main}
                        convertTime={convertTime}
                    />
                </div>
                : <h1>{props.main}</h1>
            }
        </div>
    );
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
});

export default connect(mapStateToProps, { getData })(WeatherDisplayContainer);