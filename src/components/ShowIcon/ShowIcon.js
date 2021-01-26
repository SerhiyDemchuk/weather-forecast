import React from 'react';

const ShowIcon = ({ weather, ...props }) => {
    return (
        <div>
            <div className="description">{weather.description}</div>
            <div className="main">{weather.main}</div>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </div>
    )
}

export default ShowIcon;