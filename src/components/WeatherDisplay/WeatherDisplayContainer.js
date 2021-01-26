import React, { useState } from 'react';
import { getData } from '../../redux/reducer/weatherReducer';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';
import s from './WeatherDisplay.module.css';

const WeatherDisplayContainer = (props) => {

    let [inpVal, setInpVal] = useState();

    const getCity = (e) => {
        setInpVal(e.target.value);
    }

    let convertTemp = (obj, key) => {
        for (let values in obj) {
            if (values === key) {
                return Math.round(obj[values] - 273.15)
            }
        }
    }

    return (
        <div>
            <div className={s.typeInfo}>
                <input onChange={getCity} type="text" />
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
                    />
                </div>
                : null
            }
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