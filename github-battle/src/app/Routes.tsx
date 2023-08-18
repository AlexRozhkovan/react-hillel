import { RouterProvider } from 'react-router-dom';
import { router } from './routesSchema';
import { FC } from 'react';

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;
