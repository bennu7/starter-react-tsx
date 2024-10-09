import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Welcome';
import { ROUTE_PATES } from './ROUTE_PAGES';

const router = createBrowserRouter([
    {
        path: ROUTE_PATES.ROOT,
        element: <Welcome />,
    },
]);

const AppRoute = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
