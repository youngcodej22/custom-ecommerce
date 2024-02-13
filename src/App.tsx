import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/components/style.css';

import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        // exact: true,
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/products',
        // exact: true,
        element: <ProductList />,
    },
    // {
    //     path: '/main/:id',
    //     element: Contents,
    // },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}>
                <div className="container">
                    <Header />
                    <Contents />
                    <Footer />
                </div>
            </RouterProvider>
        </>
    );
}

export default App;
