import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllApplicants = () => {
  const axiosSecure = useAxiosSecure();

  const { data: applicants = [], isLoading } = useQuery({
    queryKey: ["all-applicants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications/paid");
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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Applicants (Paid Only)</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-base-100">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>#</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>University Name</th>
              <th>Scholarship</th>
              <th>Category</th>
              <th>Degree</th>
              <th>Payment Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((app, idx) => (
              <tr key={app._id}>
                <td>{idx + 1}</td>
                <td>{app.userName}</td>
                <td>{app.userEmail}</td>
                <td>{app.universityName}</td>
                <td>{app.scholarshipName}</td>
                <td>{app.scholarshipCategory}</td>
                <td>{app.degree}</td>
                <td>
                  <span className="badge badge-success">{app.paymentStatus}</span>
                </td>
                <td>{new Date(app.session_created).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllApplicants;
