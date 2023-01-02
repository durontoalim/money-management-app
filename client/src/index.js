import React from 'react';
import ReactDOM from 'react-dom/client';
import jwtDecode from 'jwt-decode';
import './index.css';
import App from './components/App';

import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux';

import store from './store'
import * as Types from './store/actions/types'

import setAuthToken from './utils/setAuthToken'





const token = localStorage.getItem('auth_token')
if(token) {
    let decode = jwtDecode(token)
    setAuthToken(token)
    store.dispatch({
        type: Types.SET_USER,
        payload: {
            user: decode
        }
    })
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>);

    serviceWorker.unregister();