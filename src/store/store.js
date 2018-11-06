import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';
import logger from 'redux-logger';


let store = null;

let initialState = {};

try {
    const json = window.localStorage.getItem('redux');
    initialState = JSON.parse(json);
}
catch (e) {
    console.warn("Can not read or parse initial state");
}

store = createStore(rootModule, initialState, applyMiddleware(reduxThunk, logger));


export default store;