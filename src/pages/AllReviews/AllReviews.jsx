import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const AllReviews = () => {
  const data = useLoaderData();
  // console.log(reviews);
  const axios = useAxios();

  const [search, setsearch] = useState("");

  const [reviews, setReviews] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        search ? `/reviews?search=${search}` : `/reviews`,
      );
      setReviews(res.data);
    };
    fetchData();
  }, [search, axios]);

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-[#FF6B35] font-semibold uppercase tracking-[4px] mb-3">
            Food Community
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            Explore All Food Reviews
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Discover honest reviews, trending local foods, and amazing dining
            experiences shared by passionate food lovers.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex text-black justify-center mb-14">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search food reviews..."
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-[#FF6B35] shadow-sm"
            />
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD */}
          {reviews.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* FAVORITE */}
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-rose-500 hover:text-white text-rose-500 p-3 rounded-full shadow-lg transition duration-300">
                  <FaHeart />
                </button>

                {/* RATING */}
                <div className="absolute bottom-4 left-4 bg-[#FF6B35] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <FaStar />
                  <span className="font-semibold">{item.rating}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* FOOD NAME */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.foodName}
                </h2>

                {/* RESTAURANT */}
                <p className="text-[#FF6B35] font-semibold mb-4">
                  {item.location}
                </p>

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-gray-500 mb-5">
                  <FaMapMarkerAlt className="text-[#FF6B35]" />
                  <span>{item.location}</span>
                </div>

                {/* REVIEW */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {item.review.length > 100
                    ? item.review.slice(0, 100) + "..."
                    : item.review}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.ibb.co/4pDNDk1/avatar.png"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-[#FF6B35]"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Anik Ghosh
                      </h4>

                      <p className="text-sm text-gray-400">Food Reviewer</p>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  to="/"
                  className="block text-center bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
