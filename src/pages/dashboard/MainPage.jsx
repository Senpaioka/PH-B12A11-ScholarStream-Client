import { FaUserGraduate, FaUniversity, FaFileAlt, FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {useAuth} from "../../hooks/useAuth"; 
import useUserRole from "../../hooks/useUserRole";

  const MainPage = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth(); 
    const { role, roleLoading } = useUserRole();

    const { data = {}, isLoading } = useQuery({
      queryKey: ["dashboard-stats"],
      queryFn: async () => {
        const res = await axiosSecure.get("/dashboard-stats");
        return res.data;
      },
    });

    if (isLoading) {
      return (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }

    const { applicants, scholarships, applications, reviews } = data;

    // Simple greeting message
    const greetingMessage =
      role === "admin"
        ? "You have full access to manage scholarships, users, and applications."
        : "Explore available scholarships and track your applications.";

  return (
    <div className="min-h-screen bg-base-200 p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center md:text-left">Dashboard</h1>
        <p className="text-gray-600 mt-2 text-center md:text-left">
          Welcome back! Here's an overview of this platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="card bg-primary text-primary-content shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{applicants}</h2>
              <p className="text-sm">Applicants</p>
            </div>
            <FaUserGraduate className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="card bg-secondary text-secondary-content shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{scholarships}</h2>
              <p className="text-sm">Scholarships</p>
            </div>
            <FaUniversity className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="card bg-accent text-accent-content shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{applications}</h2>
              <p className="text-sm">Applications Submitted</p>
            </div>
            <FaFileAlt className="text-4xl opacity-80" />
          </div>
        </div>

        <div className="card bg-info text-info-content shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{reviews}</h2>
              <p className="text-sm">Reviews</p>
            </div>
            <FaStar className="text-4xl opacity-80" />
          </div>
        </div>

      </div>

      {/* User Info Section */}
      <div className="card bg-base-100 shadow-xl p-6 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>

        <div className="space-y-2">
          <p><span className="font-bold">Name:</span> {user?.displayName || "Unknown User"}</p>
          <p><span className="font-bold">Email:</span> {user?.email}</p>
          <p><span className="font-bold">Role:</span> <span className="badge badge-info">{role || "student"}</span></p>
        </div>

        <div className="mt-4 p-4 bg-base-200 rounded-lg">
          <p className="text-gray-700">{greetingMessage}</p>
        </div>
      </div>

    </div>
  );
};

export default MainPage;
