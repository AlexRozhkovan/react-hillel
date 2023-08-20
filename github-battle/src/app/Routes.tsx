import {RouterProvider} from 'react-router-dom';
import {router} from './routesSchema';
import {FC, ReactElement} from 'react';

const Routes: FC = (): ReactElement => <RouterProvider router={router}/>;

export default Routes;
