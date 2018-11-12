import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


let initialState = {};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'token']
};

const persistedReducer = persistReducer(persistConfig, rootModule);

const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(reduxThunk, logger),
);

const persistor = persistStore(store);

export {store, persistor};