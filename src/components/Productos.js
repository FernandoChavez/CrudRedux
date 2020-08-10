import React, {Fragment} from 'react';

const Productos = () => {
    return (
       <Fragment>
           <h2 className="text-center my-5"> Listado de Productos</h2>
           <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="Nombre"></th>
                        <th scope="Precio"></th>
                        <th scope="Acciones"></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
           </table>
       </Fragment>
    );
}

export default Productos;