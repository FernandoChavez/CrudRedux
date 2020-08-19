import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// Crear nuevos productos
//El dispatch ejecutara funciones que tendra dentro del return
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
       dispatch(agregarProducto());

       try{
           dispatch(agregarProductoExito(producto)); 
       }catch(error){
           dispatch(agregarProductoError(true));
       }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
    
});

//si el producto se guarda en la base de datos
//Como vamos a modificar el state, se pasa al payload
//RECORDATORIO: Lo que esta entre parentesis {}  despues del arrow function =>, es el ACTION
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})
