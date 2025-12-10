import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useState } from "react";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  // const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Fetch all reviews
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarship-reviews");
      return res.data;
    },
  });

  // Delete review mutation
  const { mutate: deleteReview } = useMutation({
    mutationFn: async (reviewId) => {
      const res = await axiosSecure.delete(`/reviews/${reviewId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      Swal.fire({
        title: "Deleted!",
        text: "Review has been deleted.",
        icon: "success",
      });
    },
    onError: (err) => {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete review",
        icon: "error",
      });
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the review.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview(id);
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

  // Group reviews by scholarshipId
  const groupedReviews = reviews.reduce((acc, review) => {
    if (!acc[review.scholarshipId]) acc[review.scholarshipId] = [];
    acc[review.scholarshipId].push(review);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Reviews</h1>

      {Object.keys(groupedReviews).length === 0 ? (
        <p className="text-center text-gray-500">No reviews found.</p>
      ) : (
        Object.keys(groupedReviews).map((scholarshipId) => {
          const reviewsList = groupedReviews[scholarshipId];
          const scholarshipTitle = reviewsList[0]?.scholarshipName || "Unknown Scholarship";
          const universityName = reviewsList[0]?.universityName || "Unknown University";
          const location = `${reviewsList[0]?.universityCity || "-"}, ${reviewsList[0]?.universityCountry || "-"}`;

          return (
            <div key={scholarshipId} className="mb-10">
              <h2 className="text-xl font-semibold mb-2">Title: {scholarshipTitle}</h2>
              <p className="text-gray-600 mb-4">
                University: {universityName} | Location: {location}
              </p>
              <div className="overflow-x-auto">
                <table className="table table-compact w-full border border-gray-200 rounded-xl">
                  <thead>
                    <tr className="bg-gray-100">
                      <th>User</th>
                      <th>Photo</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewsList.map((review) => (
                      <tr key={review._id} className="hover:bg-gray-50">
                        <td>{review.username}</td>
                        <td>
                          <img
                            src={review.photo}
                            alt={review.username}
                            className="w-10 h-10 rounded-full"
                          />
                        </td>
                        <td>
                          <span className="badge badge-warning">{review.rating} / 5</span>
                        </td>
                        <td>{review.comment}</td>
                        <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() => handleDelete(review._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Reviews;
