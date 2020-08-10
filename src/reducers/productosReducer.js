import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

//El store le pasa al state, por lo tanto le pasa la accion a ejecutar
// si no le pasa nada, se inicia con el state de arriba (inicialState)
export default function(state = initialState, action){
    //En el action siempre pasa los types. Se agregaran todo los cases que describen la aplicacion y van a cambiar el state de acuaerdo al payload
    switch(action.type){
        default:
            return state;
    }
}