import React from 'react';
import ShowIcon from '../ShowIcon/ShowIcon';

const WeatherDisplay = ({ main, sys, weather, ...props }) => {

    return (
        <div style={props.hideEls}>
            <div className="main-info">
                <div className="name">{props.name} {sys.country}</div>
            </div>
            <div className="visibility">Visibility: {props.visibility}</div>
            <div className="timezone">Timezone: {props.timezone}</div>
            <div className="daytime">Daytime: {props.daytime}</div>
            <div className="sun">{sys.sunrise} {sys.sunset}</div>
            <div className="description">{weather.description}</div>
            <div className="main">{weather.main}</div>
            <ShowIcon icon={weather.icon} request={props.request} />
            {/* {props.request 
                ? <div className="icon">{() => props.showIcon(weather.icon)}</div>
                : null
            } */}

        </div>
    )
}

export default WeatherDisplay;