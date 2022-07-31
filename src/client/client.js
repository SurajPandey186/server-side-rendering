// Startup point for the client side application
import 'babel-polyfill';
import React from "react";
import Routes from './Routes';
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const _store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));


ReactDOM.hydrate(
    <Provider store={_store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>, document.getElementById("root"));
