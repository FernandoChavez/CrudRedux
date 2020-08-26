import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

// Crear nuevos productos
//El dispatch ejecutara funciones que tendra dentro del return
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
       dispatch(agregarProducto());

       try{
           //insertar en la API (O base de datos)
           await clienteAxios.post('/productos', producto);

           //Si todo sale bien, actualizar el state
           dispatch(agregarProductoExito(producto)); 

           //Alwera
           Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success'
           )
       }catch(error){
           console.log(error);
           //Si hay un eeror al cambiar el state
           dispatch(agregarProductoError(true));

           //alerta de error
           Swal.fire({
               icon: 'error',
               title: 'Hubo un error',
               text: 'Hubo un error, intenta de nuevo'
           })
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
