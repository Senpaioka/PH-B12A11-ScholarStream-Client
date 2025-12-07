import axios from "axios";

const BASE_API = import.meta.env.VITE_API_URL; 

const axiosPublic = axios.create({
  baseURL: BASE_API,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
