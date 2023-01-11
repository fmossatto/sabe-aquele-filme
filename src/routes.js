import Filmes from 'pages/Filmes';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/filmes/:id',
                    element: <Filmes />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Routes;
