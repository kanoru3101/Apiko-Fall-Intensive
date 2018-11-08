import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




let initialState = {};

try {
    const json = window.localStorage.getItem('redux');
    initialState = JSON.parse(json);
}
catch (e) {
    console.warn("Can not read or parse initial state");
}

//store = createStore(rootModule, initialState, applyMiddleware(reduxThunk, logger));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'entities']
};

const persistedReducer = persistReducer(persistConfig, rootModule);

const store = createStore(
    persistedReducer,
    applyMiddleware(reduxThunk, logger),
);

const persistor = persistStore(store);

export {store, persistor};