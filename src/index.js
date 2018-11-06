import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Desktop from './layouts/Desktop';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';


store.subscribe(() => {
    const state = store.getState();
    const json = JSON.stringify(state);

    window.localStorage.setItem('redux', json)
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Desktop />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
