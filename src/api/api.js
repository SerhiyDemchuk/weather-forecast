import * as axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const weatherAPI = {
    getWeather(city) {
        return instance.get(`weather?q=${city}&appid=f10b637ca08b184f47102d9f1de2c344`)
            .then(response => {
                return response.data;
            });
    }
}