import {combineReducers} from 'redux';
import productosReducer from './productosReducer';

//Podemos tener multiples reducers pero es importante tener el combineReducer

export default combineReducers({
    productos: productosReducer
});