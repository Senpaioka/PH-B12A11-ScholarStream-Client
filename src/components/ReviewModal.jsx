import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useAuth } from "../hooks/useAuth";
import Swal from 'sweetalert2'


const ReviewModal = ({ scholarshipId }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  if (!user) return null; // optional: hide modal if not logged in

  const handleComment = async () => {
    if (!rating) return alert("Please select a rating.");
    if (!comment.trim()) return alert("Please write a comment.");

    const reviewData = {
      scholarshipId,
      rating,
      comment,
      userId: user.email,
      photo: user.photoURL,
      username: user.displayName,
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post("/reviews", reviewData);

      if (res.data.success) {
        // Close the modal
        document.getElementById("my_modal_5").close();

        // Reset inputs
        setRating(null);
        setComment("");

        // show alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Comment Added",
          showConfirmButton: false,
          timer: 1500
        });

        // Invalidate the reviews query so it refetch 
        queryClient.invalidateQueries(["reviews", scholarshipId]);
      }
    } catch (error) {
      console.error("Review submit error:", error);
      
      // show alert
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Comment Failed",
          showConfirmButton: false,
          timer: 1500
        });
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Leave a Review</h3>

        {/* Rating Section */}
        <div className="mb-4">
          <p className="font-medium mb-2">Your Rating:</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <input
                key={num}
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={num}
                checked={rating === num}
                onChange={() => setRating(num)}
              />
            ))}
          </div>
        </div>

        {/* Comment Box */}
        <div className="mb-4">
          <p className="font-medium mb-2">Your Comment:</p>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Write your feedback here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="modal-action flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleComment}
            className="btn btn-primary w-full sm:w-auto"
          >
            Comment
          </button>

          <form method="dialog">
            <button className="btn w-full sm:w-auto">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ReviewModal;

