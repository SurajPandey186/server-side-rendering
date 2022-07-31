import thunk from "redux-thunk";
import reducers from '../client/reducers';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

export default (req) => {
    const axiosInstance = axios.create({
        headers: {
            cookie: req.get('cookie') || ""
        },
        baseURL: 'http://react-ssr-api.herokuapp.com'
    });

    const _store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return _store;
}