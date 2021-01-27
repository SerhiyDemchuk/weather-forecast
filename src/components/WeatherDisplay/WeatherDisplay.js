import React from 'react';
import ShowIcon from '../ShowIcon/ShowIcon';
import ShowMain from '../ShowMain/ShowMain';
import s from './WeatherDisplay.module.css';

const WeatherDisplay = ({ sys, weather, convertTime, ...props }) => {

    return (
        <div style={props.hideEls}>
            <div className={s.mainInfo}>
                <h2 className={s.name}>{props.name} {sys.country}</h2>
<<<<<<< HEAD
                <ShowIcon weather={weather} request={props.request} />
=======
                <div className={s.iconTemperature}>
                    <ShowIcon weather={weather} request={props.request} />
                </div>
            </div>
            <div className={s.info}>
                <ShowMain hideEls={props.hideEls} convertTemp={props.convertTemp} main={props.main} />
                <div className={s.subInfo}>
                    <div className={s.visibility}>Visibility: {props.visibility}</div>
                    <div className={s.timezone}>Timezone: {props.timezone}</div>
                    <div className={s.daytime}>Daytime: {convertTime(props.daytime)}</div>
                    <div className={s.sunR}>Sunrise: {convertTime(sys.sunrise)}</div>
                    <div className={s.sunS}>Sunset: {convertTime(sys.sunset)}</div>
                </div>
>>>>>>> UI
            </div>

        </div>
    )
}

export default WeatherDisplay;