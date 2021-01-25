import React from 'react';

const ShowIcon = (props) => {
    return (
        <div>
            {props.request
                ? <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
                : null
            }
        </div>
    )
}

export default ShowIcon;