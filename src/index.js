import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Desktop from './layouts/Desktop';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import history from './history';

import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <App/>
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
