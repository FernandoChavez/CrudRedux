import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// REDUX
import { Provider } from 'react-redux';
//El store esta por defaul en store.js, por eso no ocupa las llaves
import store from './store';

function App() {
  return (

    <Router>
      <Provider store={store}>
        <Header/>
        <div className="container">
          {/*Todo lo que esté fuera del Switch y dentro del router, se utliza en todas las paginas (se va a replicar en todos los diferentes componentes)*/ }
          {/*Lo que esté dentro del switch, en el route, es lo que va a cargar en la pagina*/ }
          <Switch>
            {/*El / indica que cuando cargue la pagina principal, se cargue el componente Productos*/}
            <Route exact path="/"component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          
          </Switch>
        </div>
      </Provider>
    </Router>
    
  );
}

export default App;
