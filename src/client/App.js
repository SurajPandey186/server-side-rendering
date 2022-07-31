import React from 'react'
import Header from './components/Header';
import { fetchCurrentUser } from './actions';
import { renderRoutes } from 'react-router-config';



const App = ({ route }) => {
    return (
        <div>
            <h1><Header /></h1>
            {renderRoutes(route.routes)}
        </div>
    )
};

const loadData = ({ dispatch }) => {
   return dispatch(fetchCurrentUser());
}

export default {
    component: App,
    loadData: loadData
}
