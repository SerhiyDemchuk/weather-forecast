import React from 'react';

const WeatherDisplay = (props) => {

    return (
        <div style={props.hideEls}>
            <div className="main-info">
                <div className="name">City: {props.name}</div>
            </div>
            <div className="visibility">Visibility: {props.visibility}</div>
            <div className="timezone">Timezone: {props.timezone}</div>
            <div className="daytime">Daytime: {props.daytime}</div>
        </div>
    )
}

export default WeatherDisplay;