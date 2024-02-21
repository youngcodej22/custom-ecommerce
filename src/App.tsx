import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/components/style.css';

import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';

import Layout from './Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';

// let router = createBrowserRouter([
const router = createBrowserRouter([
    {
        path: '/',
        // exact: true,
        // element: <Layout isOn={isOn} setIsOn={setIsOn} />,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />,
                // loader: homeLoader,
            },
            {
                index: true,
                path: '/productlist',
                element: <ProductList />,
                // exact: true,
            },
            {
                index: true,
                path: '/productdetail',
                element: <ProductDetail />,
                // exact: true,
            },
        ],
    },

    // {
    //     path: '/main/:id',
    //     element: Contents,
    // },
]);

function App() {
    return (
        // <RouterProvider router={router}>
        //     <Layout isOn={isOn} setIsOn={setIsOn} />
        // </RouterProvider>
        <RouterProvider router={router} />
    );
}

export default App;
