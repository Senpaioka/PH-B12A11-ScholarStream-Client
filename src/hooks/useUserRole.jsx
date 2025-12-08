import { useQuery } from '@tanstack/react-query';
import {useAuth} from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isLoading: roleLoading, data: role = 'student' } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            return res.data?.role || 'student';
        }
    })

    return { role, roleLoading };
};

export default useUserRole;