import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ReviewList = ({ scholarshipId }) => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews", scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?scholarshipId=${scholarshipId}`);
      return res.data;
    },
    enabled: !!scholarshipId,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <p className="text-center text-gray-500 text-sm py-6">
        No reviews yet. Be the first to review.
      </p>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold border-b pb-2">
        Student Reviews ({reviews.length})
      </h2>

      {reviews.map((review) => (
        <div
          key={review._id}
          className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          {/* Top Section - User Info */}
          <div className="flex items-start gap-4">
            <img
              src={review.photo}
              alt="User"
              className="w-14 h-14 rounded-full object-cover border"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{review.username}</h3>
              <p className="text-gray-500 text-sm">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>

              {/* Rating Stars */}
              <div className="rating mt-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <input
                    key={num}
                    type="radio"
                    readOnly
                    className="mask mask-star-2 bg-orange-400"
                    checked={review.rating === num}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Comment */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
