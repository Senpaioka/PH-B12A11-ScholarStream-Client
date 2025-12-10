import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";

const AllApplicants = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch all paid applicants
  const { data: applicants = [], isLoading } = useQuery({
    queryKey: ["all-applicants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications/paid");
      return res.data;
    },
  });

  // Mutation to update feedback
  const { mutate: giveFeedback } = useMutation({
    mutationFn: async ({ applicationId, feedback }) => {
      const res = await axiosSecure.patch(`/applications/feedback/${applicationId}`, { feedback });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all-applicants"]);
      Swal.fire({
        title: "Success!",
        text: "Feedback has been submitted.",
        icon: "success",
      });
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to submit feedback",
        icon: "error",
      });
    },
  });

  const handleFeedback = (applicationId, currentFeedback) => {
    Swal.fire({
      title: "Provide Feedback",
      input: "textarea",
      inputLabel: "Feedback",
      inputValue: currentFeedback || "",
      inputPlaceholder: "Type your feedback here...",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value.trim() !== "") {
        giveFeedback({ applicationId, feedback: result.value });
      }
    });
  };

  if (isLoading) {
    return (
      <Spinner></Spinner>
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
              <th>Feedback</th>
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
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleFeedback(app._id, app.feedback)}
                  >
                    {app.feedback ? "Edit Feedback" : "Give Feedback"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllApplicants;

