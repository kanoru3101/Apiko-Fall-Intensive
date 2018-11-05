import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';


let store = null;

store = createStore(rootModule, applyMiddleware(reduxThunk));

export default store;