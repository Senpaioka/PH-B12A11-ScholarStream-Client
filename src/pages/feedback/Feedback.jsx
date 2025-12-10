import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";

const Feedback = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axiosSecure.get(`/applications/feedback/${user?.email}`);
        setFeedbacks(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (user?.email) fetchFeedbacks();
  }, [user, axiosSecure]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">No feedback received yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbacks.map((app) => (
          <div
            key={app._id}
            className="card bg-base-100 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {app.scholarshipName}
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">University:</span> {app.universityName}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Category:</span> {app.scholarshipCategory} |{" "}
                <span className="font-medium">Degree:</span> {app.degree}
              </p>
              <div className="p-4 bg-base-200 rounded-lg">
                <p className="text-gray-800">{app.feedback}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Submitted on: {new Date(app.session_created).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
