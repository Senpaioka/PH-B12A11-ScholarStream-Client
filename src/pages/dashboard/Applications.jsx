import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from 'sweetalert2'



const MyApplications = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["my-applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      return res.data;
    },
  });


    // DELETE MUTATION
  const deleteMutation = useMutation({
    mutationFn: async (scholarshipId) => {
      return await axiosSecure.delete(`/applications/${scholarshipId}`);
    },
    onSuccess: () => {
      // Refresh table
      queryClient.invalidateQueries(["my-applications"]);
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to Delete",
        showConfirmButton: false,
        timer: 1500
      });
    },
  });


  // DELETE HANDLER
  const handleDelete = (scholarshipId) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your record has been deleted.",
            icon: "success"
          });
          deleteMutation.mutate(scholarshipId);
        }
      });
  };


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-compact w-full border border-gray-200 rounded-xl">
            <thead>
              <tr className="bg-gray-100">
                <th>University Name</th>
                <th>Scholarship Name</th>
                <th>Feedback</th>
                <th>Scholarship Category</th>
                <th>Application Fees</th>
                <th>Application Status</th>
                <th>Payment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td>{app.universityName}</td>
                  <td>{`${app.scholarshipName}`}</td>
                  <td>{app.feedback || "-"}</td>
                  <td>{app.scholarshipCategory}</td>
                  <td>${app.applicationFees}</td>
                  <td>
                    <span
                      className={`badge ${
                        app.applicationStatus === "pending"
                          ? "badge-warning"
                          : "badge-success"
                      }`}
                    >
                      {app.applicationStatus}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        app.paymentStatus === "unpaid"
                          ? "badge-error"
                          : "badge-success"
                      }`}
                    >
                      {app.paymentStatus}
                    </span>
                  </td>
                  <td className="flex flex-col sm:flex-row gap-2">
                    {/* Details button */}
                    <Link to={`/scholarship/details/${app.scholarshipId}`} className="btn btn-sm btn-outline">
                      Details
                    </Link>

                    {/* Pay button */}
                    {app.applicationStatus === "pending" &&
                      app.paymentStatus === "unpaid" && (
                        <Link to={`/payment/confirm/${app.scholarshipId}`} className="btn btn-sm btn-primary">
                          Pay
                        </Link>
                      )}

                    {/* Delete button */}
                    {app.applicationStatus === "pending" && (
                      <button onClick={() => handleDelete(app.scholarshipId)} className="btn btn-sm btn-error">Delete</button>
                    )}

                    {/* Add Review */}
                    {app.applicationStatus === "completed" && (
                      <button className="btn btn-sm btn-success">
                        Add Review
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
