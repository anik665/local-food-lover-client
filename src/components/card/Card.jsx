import React, { useContext } from "react";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthContex";

const Card = ({ item }) => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const handelFavorite = () => {
    console.log("favorite clicked");
    axios.post("/favorites", {
      productId: item._id,
      email: user.email,
    });
  };
  const cardDEtails = (id) => {
    console.log("card details clicked");
    axios.get(`/products/${id}`);
  };

  return (
    <div>
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
          <button
            onClick={handelFavorite}
            className="absolute top-4 right-4 bg-white/90 hover:bg-rose-500 hover:text-white text-rose-500 p-3 rounded-full shadow-lg transition duration-300"
          >
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
          <p className="text-[#FF6B35] font-semibold mb-4">{item.location}</p>

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
                <h4 className="font-semibold text-gray-800">Anik Ghosh</h4>

                <p className="text-sm text-gray-400">Food Reviewer</p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString()
                    : "Recently Added"}
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            onClick={() => cardDEtails(item._id)}
            to={`/cardDetails/${item._id}`}
            className="block text-center bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
