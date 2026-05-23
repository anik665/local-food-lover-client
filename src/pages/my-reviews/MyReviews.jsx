import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContex";

const MyReviewsUI = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(`/my-reviews?email=${user.email}`);

        setReviews(data || []);
      } catch (err) {
        console.log(err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [user?.email]);

  // 🔥 Loading UI
  if (isLoading) {
    return (
      <div className="p-6 text-center text-lg font-semibold">
        Loading reviews...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📋 My Reviews</h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Add Review
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
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
            {reviews.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No Reviews Found
                </td>
              </tr>
            ) : (
              reviews.map((review) => (
                <tr key={review._id} className="border-b hover:bg-gray-50">
                  {/* Image */}
                  <td className="p-3">
                    <img
                      src={review.imgUrl}
                      alt="food"
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                  </td>

                  {/* Food Name */}
                  <td className="p-3 text-black font-medium">
                    {review.foodName}
                  </td>

                  {/* Restaurant / Location */}
                  <td className="p-3 text-gray-600 ">
                    {review.restaurantName || review.location}
                  </td>

                  {/* Date */}
                  <td className="p-3 text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="p-3 text-center space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviewsUI;
