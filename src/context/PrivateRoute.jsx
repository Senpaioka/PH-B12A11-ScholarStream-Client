import { Navigate, useLocation } from "react-router";
import {useAuth} from '../hooks/useAuth';
import Spinner from '../components/Spinner';


function PrivateRoute({children}) {

    const {user, isLoading} = useAuth();
    const location = useLocation();

    if (isLoading) return <Spinner></Spinner>;
    if (user) return children;

    return <Navigate state={location?.pathname} to='/login'></Navigate>
}

export default PrivateRoute;