import React, { useState } from 'react';
import { getData } from '../../redux/reducer/weatherReducer';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';
import s from './WeatherDisplay.css';
// import { weatherAPI } from '../../api/api';

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
                <button onClick={() => props.getData(inpVal)}>Click</button>
            </div>
            <WeatherDisplay 
            temperature={props.temperature} 
            cityName={props.cityName}/>
        </div>
    )
}

const mapStateToProps = state => ({
    temperature: state.temperature,
    cityName: state.cityName
})

export default connect(mapStateToProps, { getData })(WeatherDisplayContainer);