import {createBrowserRouter, RouteObject} from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import Popular from '../pages/Popular';
import Battle from '../pages/Battle';
import Results from '../pages/Battle/Results';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'popular',
                element: <Popular/>,
            },
            {
                path: 'battle',
                element: <Battle/>,
            },
            {
                path: 'battle/results',
                element: <Results/>,
            },
            {
                path: '*',
                element: <h3>Error!</h3>,
            },
        ],
    },
] as RouteObject[]);
