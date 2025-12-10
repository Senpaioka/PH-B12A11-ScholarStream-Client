import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Mutation: Change role
  const { mutate: updateRole } = useMutation({
    mutationFn: async ({ userId, newRole }) =>
      axiosSecure.patch(`/users/role/${userId}`, { role: newRole }),

    onSuccess: () => {
      queryClient.invalidateQueries(["all-users"]);
    },
  });

  const handleRoleChange = (id, role) => {
    updateRole({ userId: id, newRole: role });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      <div className="overflow-x-auto shadow-lg rounded-xl border">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Provider</th>
              <th>Current Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-base-100">
                <td>
                  <img
                    src={user.photo}
                    alt="user"
                    className="w-12 h-12 rounded-full border object-cover"
                  />
                </td>

                <td className="font-semibold">{user.name}</td>

                <td>{user.email}</td>

                <td className="capitalize">{user.providerId.replace(".com", "")}</td>

                <td>
                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "badge-primary"
                        : user.role === "moderator"
                        ? "badge-accent"
                        : "badge-ghost"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">

                    {/** Promote to Moderator */}
                    {user.role !== "moderator" && (
                      <button
                        onClick={() => handleRoleChange(user._id, "moderator")}
                        className="btn btn-sm btn-accent"
                      >
                        Make Moderator
                      </button>
                    )}

                    {/** Promote to Admin */}
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleRoleChange(user._id, "admin")}
                        className="btn btn-sm btn-primary"
                      >
                        Make Admin
                      </button>
                    )}

                    {/** Demote to Student */}
                    {user.role !== "student" && (
                      <button
                        onClick={() => handleRoleChange(user._id, "student")}
                        className="btn btn-sm btn-warning"
                      >
                        Make Student
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
