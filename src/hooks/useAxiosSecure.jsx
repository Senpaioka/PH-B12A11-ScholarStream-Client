import axios from "axios";
import { useEffect } from "react";
import {useAuth} from "./useAuth";
import { useNavigate } from "react-router";

const BASE_API = import.meta.env.VITE_API_URL; 


const axiosSecure = axios.create({
  baseURL: BASE_API,
  withCredentials: true, // important for cookies
});


const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
        // intercept request
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })

        // interceptor response
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log(error);

            const statusCode = error.status;
            if (statusCode === 401 || statusCode === 403) {
                logoutUser()
                    .then(() => {
                        navigate('/login')
                    })
            }


            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    }, [user, logoutUser, navigate])

  return axiosSecure;
};

export default useAxiosSecure;
