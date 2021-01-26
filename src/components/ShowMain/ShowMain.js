import React from 'react';
import s from './ShowMain.module.css';

const ShowMain = ({main, convertTemp, ...props}) => {
    return (
        <div className={s.mainWrap} style={props.hideEls}>
            <div className={s.temp}>Temperature: {convertTemp(main, 'temp')}</div>
            <div className={s.feelsLike}>Feels like: {convertTemp(main, 'feels_like')}</div>
            <div className={s.tempMin}>Temp min: {convertTemp(main, 'temp_min')}</div>
            <div className={s.tempMax}>Temp max: {convertTemp(main, 'temp_max')}</div>
            <div className={s.pressure}>Pressure: {main.pressure}</div>
            <div className={s.humidity}>Humidity: {main.humidity}</div>
        </div>
    );
}

export default ShowMain;