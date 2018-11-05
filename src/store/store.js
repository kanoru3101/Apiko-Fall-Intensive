import { createStore } from 'redux';
import rootModule from '../modules/rootModule';


const store = createStore(rootModule);

export default store;