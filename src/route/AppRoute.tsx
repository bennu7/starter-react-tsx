import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Welcome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
    },
]);

const AppRoute = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
