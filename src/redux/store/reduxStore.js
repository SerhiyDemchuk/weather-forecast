import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { weatherReducer } from '../reducer/weatherReducer';

const store = createStore(weatherReducer, applyMiddleware(thunk));

window.__store__ = store;
export default store;