import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import s from './WeatherDisplay.css';

const WeatherDisplayContainer = (props) => {

    let [inpVal, setInpVal] = useState();

    const getCity = (e) => {
        setInpVal(e.target.value);
    }

    return (
        <div>
            <div className={s.status}>
                <h1>Active Games</h1>
                <input onChange={getCity} type="text" />
            </div>
            <WeatherDisplay inpVal={inpVal} />
        </div>
    )
}

export default WeatherDisplayContainer;