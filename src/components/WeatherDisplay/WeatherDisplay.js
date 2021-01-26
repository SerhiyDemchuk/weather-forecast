import React from 'react';
import ShowIcon from '../ShowIcon/ShowIcon';
import ShowMain from '../ShowMain/ShowMain';
import s from './WeatherDisplay.module.css';

const WeatherDisplay = ({ sys, weather, ...props }) => {

    return (
        <div style={props.hideEls}>
            <div className={s.mainInfo}>
                <h2 className={s.name}>{props.name} {sys.country}</h2>
            <ShowIcon weather={weather} request={props.request} />
            </div>
            <ShowMain hideEls={props.hideEls} convertTemp={props.convertTemp} main={props.main} />
            <div className={s.visibility}>Visibility: {props.visibility}</div>
            <div className={s.timezone}>Timezone: {props.timezone}</div>
            <div className={s.daytime}>Daytime: {props.daytime}</div>
            <div className={s.sun}>{sys.sunrise} {sys.sunset}</div>

        </div>
    )
}

export default WeatherDisplay;