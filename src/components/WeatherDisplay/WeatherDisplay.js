import React from 'react';

const WeatherDisplay = (props) => {

    return (
        <div>
            <div className="tempField">{props.temperature}</div>
            <div className="cityNameField">{props.cityName}</div>
        </div>
    )
}

export default WeatherDisplay;