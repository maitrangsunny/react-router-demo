import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Products from './components/Products';
import Login from './components/Login';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/products',
        exact: false,
        main: ({match, location}) => <Products match = {match} location={location}/> //match la thso dau vao
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location = {location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    },
]
export default routers;