import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootModule from '../modules/rootModule';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootModule);

const store = createStore(
    persistedReducer,
    applyMiddleware(reduxThunk, logger),
);

const persistor = persistStore(store);

export {store, persistor};