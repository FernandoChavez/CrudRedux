import React, {useState} from 'react';
//useDispatch nos sirve para mandar a ejecutar las acciones que tengamos
//useSelector es una forma que vas a acceder al state dentro del componente
import {useDispatch, useSelector} from 'react-redux';

//Actions de Redux
import {crearNuevoProductoAction} from '../actions/productoActions';

//Cuando instalamos ReactRouterDOM y nuestros componentes estan en el routing tenemos acceso al "history"
//Asi que lo podmeos extrar
const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //utilizat useDispatch y te crea una funcion
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector((state) => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    //El dispatch es como una funcion que toma otra funcion
    //Dispatch sirve para mandar a ejecutar las funciones que tengamos en nuestros actions
    
    // mandar a llamar el action de productoAction
    const agregarProducto= (producto) => dispatch(crearNuevoProductoAction(producto))
    
    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario
        if(nombre.trim()==='' || precio <= 0 ){
            return;
        }

        // si no hay errores

        // crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        //reedireccionar
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    nombre="precio"
                                    value={precio}
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Crear Producto
                            </button>
                            

                        </form>

                        {cargando ? <p>Cargando... </p> : null}
                        {error ? <p className = "alert alert-danger p2 mt-4">Hubo un error</p> : null};
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NuevoProducto;