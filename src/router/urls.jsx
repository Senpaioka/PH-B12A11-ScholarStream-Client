import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from '../App';
import Spinner from '../components/Spinner';

// pages
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
const Home = lazy(() => import('../pages/home/Home'));





const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <Spinner></Spinner>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
        {
            index: true,
            element: (
                <Suspense fallback={<Spinner></Spinner>}>
                    <Home></Home>
                </Suspense>
            ),
        },
        {
          path: 'login',
          Component: Login,
        },
        {
          path: 'register',
          Component: Register,
        }
    ],
  },
]);


export { router };