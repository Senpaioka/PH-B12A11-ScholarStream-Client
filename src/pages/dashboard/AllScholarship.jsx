import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const PublishedScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();


  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["published-scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships/published");
      return res.data;
    },
  });


  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the scholarship!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axiosSecure.delete(`/scholarships/${id}`);
        Swal.fire("Deleted!", "Scholarship has been deleted.", "success");
        queryClient.invalidateQueries(["published-scholarships"]);
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Failed to delete scholarship.", "error");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Published Scholarships</h1>

      {scholarships.length === 0 ? (
        <p className="text-center text-gray-500">No scholarships published yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-compact w-full border border-gray-200 rounded-lg">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Scholarship Name</th>
                <th>University Name</th>
                <th>Country</th>
                <th>City</th>
                <th>Degree</th>
                <th>Posted By</th>
                <th>Post Date</th>
                <th>Last Update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((sch, idx) => (
                <tr key={sch._id} className="hover:bg-gray-50">
                  <td>{idx + 1}</td>
                  <td>{sch.scholarshipName}</td>
                  <td>{sch.universityName}</td>
                  <td>{sch.universityCountry}</td>
                  <td>{sch.universityCity}</td>
                  <td>{sch.degree}</td>
                  <td>{sch.postedUserEmail}</td>
                  <td>{new Date(sch.scholarshipPostDate).toLocaleDateString()}</td>
                  <td>{new Date(sch.scholarshipPostUpdateDate).toLocaleDateString()}</td>
                  <td className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/scholarship/details/${sch._id}`}
                      className="btn btn-sm btn-outline"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/dashboard/scholarship/edit/${sch._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(sch._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
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

export default PublishedScholarships;
