import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContex";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewsUI = () => {
  const axios = useAxios();
  const { user, loading: authLoading } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (authLoading || !user?.email) return;

    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/my-reviews?email=${user.email}`);
        setReviews(data || []);
      } catch (err) {
        console.log(err);
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [user?.email, authLoading]);

  // ✅ Delete Handler (fixed - confirm before delete)
  const handleDelete = async (reviewId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/my-reviews/${reviewId}`);
          setReviews((prev) => prev.filter((r) => r._id !== reviewId));
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
        } catch (err) {
          console.log(err);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  // ✅ Open Modal with selected review data
  const handleEditClick = (review) => {
    setSelectedReview(review);
    document.getElementById("edit_modal").showModal();
  };

  // ✅ Update Handler
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/my-reviews/${selectedReview._id}`, selectedReview);
      // update the review in the list
      setReviews((prev) =>
        prev.map((r) => (r._id === selectedReview._id ? selectedReview : r)),
      );
      Swal.fire("Updated!", "Your review has been updated.", "success");
      document.getElementById("edit_modal").close();
    } catch (err) {
      console.log(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📋 My Reviews</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          <Link to="/add-review">+ Add Review</Link>
        </button>
      </div>

      {/* ✅ Desktop Table - hidden on mobile */}
      <div className="hidden md:block bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">Food</th>
              <th className="p-3">Food Name</th>
              <th className="p-3">Restaurant</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading || authLoading ? (
              <tr>
                <td colSpan="5" className="text-center p-6">
                  <div className="flex justify-center items-center gap-2 text-gray-500">
                    <svg
                      className="animate-spin h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Loading your reviews...
                  </div>
                </td>
              </tr>
            ) : reviews.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-10 text-gray-400">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">🍽️</span>
                    <p className="text-lg font-medium">No Reviews Found</p>
                    <p className="text-sm">
                      Start by adding your first review!
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              reviews.map((review) => (
                <tr
                  key={review._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <img
                      src={review.imgUrl}
                      alt={review.foodName}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                  </td>
                  <td className="p-3 font-medium text-gray-800">
                    {review.foodName}
                  </td>
                  <td className="p-3 text-gray-600">
                    {review.restaurantName || review.location}
                  </td>
                  <td className="p-3 text-gray-500">
                    {review.createdAt
                      ? new Date(review.createdAt).toLocaleDateString()
                      : "No Date"}
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEditClick(review)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Cards - shown only on mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {isLoading || authLoading ? (
          <div className="flex justify-center items-center gap-2 text-gray-500 p-6">
            <svg
              className="animate-spin h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Loading your reviews...
          </div>
        ) : reviews.length === 0 ? (
          <div className="flex flex-col items-center gap-2 text-gray-400 p-10">
            <span className="text-4xl">🍽️</span>
            <p className="text-lg font-medium">No Reviews Found</p>
            <p className="text-sm">Start by adding your first review!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white rounded-xl shadow-md p-4 flex gap-4"
            >
              {/* Image */}
              <img
                src={review.imgUrl}
                alt={review.foodName}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg">
                  {review.foodName}
                </p>
                <p className="text-gray-500 text-sm">
                  {review.restaurantName || review.location}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : "No Date"}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEditClick(review)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Edit Modal */}
      <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl border border-orange-100 bg-white shadow-2xl rounded-3xl p-0 ">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-5 text-white">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              ✏️ Edit Your Review
            </h3>
            <p className="text-sm text-orange-100 mt-1">
              Update your food experience and save changes.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdate} className="p-6 space-y-5">
            {/* Food Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                🍔 Food Name
              </label>

              <div className="relative group">
                {/* Left Icon */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 text-lg">
                  🍽️
                </span>

                <input
                  type="text"
                  placeholder="Enter delicious food name..."
                  className="
        w-full
        pl-12
        pr-4
        py-3
        rounded-2xl
        border border-orange-100
        bg-orange-50/40
        text-gray-700
        placeholder:text-gray-400
        shadow-sm
        transition-all duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-orange-300
        focus:border-orange-400
        focus:bg-white
        group-hover:border-orange-300
      "
                  value={selectedReview?.foodName || ""}
                  onChange={(e) =>
                    setSelectedReview({
                      ...selectedReview,
                      foodName: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Rating ⭐
              </label>

              <input
                type="number"
                min="1"
                max="5"
                placeholder="Give rating between 1-5"
                className=" w-full
        pl-12
        pr-4
        py-3
        rounded-2xl
        border border-orange-100
        bg-orange-50/40
        text-gray-700
        placeholder:text-gray-400
        shadow-sm
        transition-all duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-orange-300
        focus:border-orange-400
        focus:bg-white
        group-hover:border-orange-300"
                value={selectedReview?.rating || ""}
                onChange={(e) =>
                  setSelectedReview({
                    ...selectedReview,
                    rating: e.target.value,
                  })
                }
              />
            </div>

            {/* Review */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Review
              </label>

              <textarea
                rows="5"
                placeholder="Write your experience..."
                className="textarea textarea-bordered w-full
        pl-12
        pr-4
        py-3
        rounded-2xl
        border border-orange-100
        bg-orange-50/40
        text-gray-700
        placeholder:text-gray-400
        shadow-sm
        transition-all duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-orange-300
        focus:border-orange-400
        focus:bg-white
        group-hover:border-orange-300"
                value={selectedReview?.review || ""}
                onChange={(e) =>
                  setSelectedReview({
                    ...selectedReview,
                    review: e.target.value,
                  })
                }
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
              <form method="dialog">
                <button className="btn w-full sm:w-auto rounded-2xl border-none bg-gray-200 hover:bg-gray-300 text-gray-700 px-6">
                  Cancel
                </button>
              </form>

              <button
                type="submit"
                className="btn w-full sm:w-auto rounded-2xl border-none bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white px-6"
              >
                Save Changes ✅
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyReviewsUI;
