import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@/context/store.ts';
import Welcome from './Welcome';
import { ROUTE_PATES } from './ROUTE_PAGES';

const router = createBrowserRouter([
    {
        path: ROUTE_PATES.ROOT,
        element: <Welcome />,
    },
]);

const AppRoute = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
};

export default AppRoute;
