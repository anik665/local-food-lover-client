import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaUser, FaEnvelope } from "react-icons/fa";

const CardDetails = () => {
  const review = useLoaderData();

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-600">No Data Found 😢</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src={review.imgUrl}
            alt={review.foodName}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-3xl shadow-md p-8 mt-8">
          {/* FOOD NAME */}
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {review.foodName}
          </h1>

          {/* RESTAURANT */}
          <p className="text-[#FF6B35] font-semibold text-lg mb-6">
            {review.restaurantName}
          </p>

          {/* INFO ROW */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            {/* LOCATION */}
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-[#FF6B35]" />
              <span>{review.location}</span>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-2 bg-orange-100 text-[#FF6B35] px-4 py-1 rounded-full font-semibold">
              <FaStar />
              <span>{review.rating}</span>
            </div>

            {/* USER EMAIL */}
            <div className="flex items-center gap-2 text-gray-600">
              <FaEnvelope className="text-[#FF6B35]" />
              <span>{review.userEmail}</span>
            </div>
          </div>

          {/* REVIEW TEXT */}
          <p className="text-gray-600 leading-relaxed text-lg mb-8 whitespace-pre-line">
            {review.review}
          </p>

          {/* EXTRA SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Why People Love It
              </h3>
              <p className="text-gray-600">
                Fresh ingredients, rich flavor, and traditional cooking style
                make this dish unforgettable.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community Insight
              </h3>
              <p className="text-gray-600">
                This review is shared by a real user from your Local Food Lovers
                Network platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
