import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Popular from '../pages/Popular/index';
import Battle from '../pages/Battle/index';
import Results from '../pages/Battle/Results';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'popular',
        element: <Popular />,
      },
      {
        path: 'battle',
        element: <Battle />,
      },
      {
        path: 'battle/results',
        element: <Results />,
      },
      {
        path: '*',
        element: <h3>Error!</h3>,
      },
    ],
  },
]);
