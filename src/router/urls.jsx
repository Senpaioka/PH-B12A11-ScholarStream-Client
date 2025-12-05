import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from '../App';
import Spinner from '../components/Spinner';

// pages
const Home = lazy(() => import('../pages/home/Home'));





const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <Spinner></Spinner>,

    children: [
        {
            index: true,
            element: (
                <Suspense fallback={<Spinner></Spinner>}>
                    <Home></Home>
                </Suspense>
            ),
        },
    ],
  },
]);


export { router };