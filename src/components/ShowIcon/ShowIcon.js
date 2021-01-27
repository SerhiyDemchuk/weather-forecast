import React from 'react';
import s from './ShowIcon.module.css';

const ShowIcon = ({ weather, ...props }) => {
    return (
        <div className={s.iconWrap}>
            <h2 className="description">{weather.description}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        </div>
    )
}

export default ShowIcon;