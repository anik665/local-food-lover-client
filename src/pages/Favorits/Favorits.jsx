import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContex";
import useAxios from "../../hooks/useAxios";

const Favorits = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const [favorites, setFavorits] = useState([]);

  useEffect(() => {
    const favorites = async () => {
      const response = await axios.get(`/favorites?email=${user.email}`);
      setFavorits(response.data);
    };

    favorites();
  }, [user.email]);
  const handelRemoveFavorite = async (id) => {
    try {
      await axios.delete(`/favorites/${id}?email=${user.email}`);
      setFavorits((prev) => prev.filter((item) => item.favoriteId !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div>
      {" "}
      <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            My Favorite Foods ❤️
          </h1>

          {favorites.length === 0 ? (
            <p className="text-center text-gray-500">
              No favorite items found 😢
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div
                  key={item.favoriteId}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={item.imgUrl}
                    alt={item.foodName}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.foodName}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.location}
                    </p>

                    <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>

                    <p className="text-gray-600 text-sm mt-2">
                      {item.review?.slice(0, 80)}...
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => {
                        console.log(item._id);
                        console.log(item.favoriteId);
                        handelRemoveFavorite(item.favoriteId);
                      }}
                      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                    >
                      Remove Favorite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorits;
