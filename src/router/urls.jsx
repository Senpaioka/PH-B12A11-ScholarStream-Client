import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from '../App';
import Spinner from '../components/Spinner';

// pages
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Publish from "../pages/dashboard/Publish";
import Dashboard from "../Dashboard";
const Home = lazy(() => import('../pages/home/Home'));
const MainPage = lazy(() => import('../pages/dashboard/MainPage'));
const Settings = lazy(() => import('../pages/dashboard/Settings'));
const Analysis = lazy(() => import('../pages/dashboard/Analysis'));
const Profile = lazy(() => import('../pages/dashboard/Profile'));
const AllScholarship = lazy(() => import('../pages/dashboard/AllScholarship'));
const ManageUser = lazy(() => import('../pages/dashboard/ManageUser'));
const ApplicantList = lazy(() => import('../pages/dashboard/ApplicantList'));
const Reviews = lazy(() => import('../pages/dashboard/Reviews'));
const Applications = lazy(() => import('../pages/dashboard/Applications'));
const AllScholarshipPage = lazy(() => import('../pages/scholarships/AllScholarshipPage'));
const ScholarshipDetails = lazy(() => import('../pages/scholarships/ScholarshipDetails'));




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
        },
        {
          path: 'scholarships',
          element: (
            <Suspense fallback={<Spinner></Spinner>}>
              <AllScholarshipPage></AllScholarshipPage>
            </Suspense>
          )
        },
        {
          path: 'scholarship/details/:id',
          element: (
            <Suspense fallback={<Spinner></Spinner>}>
              <ScholarshipDetails></ScholarshipDetails>
            </Suspense>
          )
        }
    ],
  },
  {
    path: 'dashboard',
    Component: Dashboard,
    
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <MainPage></MainPage>
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Settings></Settings>
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Profile></Profile>
          </Suspense>
        ),
      },
      {
        path: 'publish',
        Component: Publish,
      },
      {
        path: 'analysis',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Analysis></Analysis>
          </Suspense>
        ),
      },
      {
        path: 'all-posted-scholarships',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <AllScholarship></AllScholarship>
          </Suspense>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <ManageUser></ManageUser>
          </Suspense>
        ),
      },
      {
        path: 'all-applicants',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <ApplicantList></ApplicantList>
          </Suspense>
        ),
      },
      {
        path: 'student-reviews',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Reviews></Reviews>
          </Suspense>
        ),
      },
      {
        path: 'applications',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Applications></Applications>
          </Suspense>
        ),
      },
    ],
  }
]);


export { router };