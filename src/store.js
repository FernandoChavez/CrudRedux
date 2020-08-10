//Con applyMiddleware podemos pasarle el stunk y lo agrega al stunk
import {createStore, applyMiddleware, compose} from 'redux';
//Hay variaciones de redux. Este nos permite usar funciones asincronas. Siempre que se crea un store, se requiere un reducer
// El reducer es juntar todas las piezas o componentes de aplicacion con su respectivo state, juntandolo
//El reducer es simplemente eso, una función que recibe dos parámetros, el estado inicial y una acción y dependiendo del tipo de acción -> 
//realizará una operación u otra en el estado. Siempre de manera inmutable, no podemos modificar el estado, si no crear una copia a partir del anterior.
import thunk from 'redux-thunk';

//como el archivo es index.js, no es necesario agregarlo en la url
import reducer from './reducers';

//add redux-developer-tools
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        //Esto es para que el proyecto redux corrar sin tener necesariamente instalado el redux-devtools en el navegador
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;