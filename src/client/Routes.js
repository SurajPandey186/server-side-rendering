// Startup point for the client side application
import React from "react";
import App from "./App";
import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
    {
        ...App,
        routes: [{
            path: '/',
            exact: true,
            ...HomePage
        }, {
            exact: true,
            path: '/users',
            ...UsersListPage
        },
        {
            exact: true,
            path: '/admins',
            ...AdminsListPage
        }, {
            ...NotFoundPage
        }]
    }
]