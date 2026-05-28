// src/pages/Profile/ProfilePage.jsx

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContex";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const { user, signOuts, UpdateProfiles } = useContext(AuthContext);

  const navigate = useNavigate();
  const axios = useAxios();

  const [isEditing, setIsEditing] = useState(false);

  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const [isUpdating, setIsUpdating] = useState(false);

  // Stats
  const [reviewCount, setReviewCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [statsLoading, setStatsLoading] = useState(true);

  // Fetch Stats
  useEffect(() => {
    if (!user?.email) return;

    const fetchStats = async () => {
      try {
        setStatsLoading(true);

        const [reviewRes, favoriteRes] = await Promise.all([
          axios.get(`/my-reviews?email=${user.email}`),
          axios.get(`/favorites?email=${user.email}`),
        ]);

        setReviewCount(reviewRes?.data?.length || 0);

        setFavoriteCount(favoriteRes?.data?.length || 0);
      } catch (err) {
        console.log(err);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchStats();
  }, [user?.email]);

  // Logout
  const handleLogout = async () => {
    await signOuts();
    navigate("/login");
  };

  // Update Profile
  const handleUpdate = async (e) => {
    e.preventDefault();

    setIsUpdating(true);

    try {
      await UpdateProfiles({
        displayName: displayName,
        photoURL: photoURL,
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile updated successfully.",
        confirmButtonColor: "#FF6B35",
      });

      setIsEditing(false);
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong.",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-10 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-[32px] shadow-[0_10px_40px_rgba(255,107,53,0.15)] overflow-hidden border border-orange-100">
          {/* Top Banner */}
          <div className="h-36 bg-gradient-to-r from-[#FF6B35] via-orange-500 to-red-500 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative px-6 pb-8">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="-mt-16 relative">
                <img
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="avatar"
                  className="w-32 h-32 rounded-full border-[6px] border-white object-cover shadow-2xl"
                />

                {/* Online Dot */}
                <div className="absolute bottom-3 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold text-gray-800">
                {user?.displayName || "No Name"}
              </h2>

              <p className="text-gray-400 text-sm mt-1">{user?.email}</p>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(true)}
                className="
                  mt-4
                  px-5
                  py-2
                  rounded-full
                  bg-orange-50
                  border border-orange-200
                  text-[#FF6B35]
                  font-medium
                  hover:bg-[#FF6B35]
                  hover:text-white
                  transition-all duration-300
                "
              >
                ✏️ Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-7">
              {/* Reviews */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-5 text-center border border-orange-100">
                {statsLoading ? (
                  <div className="w-10 h-8 bg-orange-200 animate-pulse rounded mx-auto"></div>
                ) : (
                  <h3 className="text-3xl font-bold text-[#FF6B35]">
                    {reviewCount}
                  </h3>
                )}

                <p className="text-gray-500 text-sm mt-1">Total Reviews</p>
              </div>

              {/* Favorites */}
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-3xl p-5 text-center border border-orange-100">
                {statsLoading ? (
                  <div className="w-10 h-8 bg-orange-200 animate-pulse rounded mx-auto"></div>
                ) : (
                  <h3 className="text-3xl font-bold text-red-500">
                    {favoriteCount}
                  </h3>
                )}

                <p className="text-gray-500 text-sm mt-1">Favorites</p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 hover:bg-orange-50 transition">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">
                  📧
                </div>

                <div>
                  <p className="text-xs text-gray-400">Email Address</p>

                  <h4 className="font-semibold text-gray-700">{user?.email}</h4>
                </div>
              </div>

              {/* Name */}
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 hover:bg-orange-50 transition">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">
                  👤
                </div>

                <div>
                  <p className="text-xs text-gray-400">Display Name</p>

                  <h4 className="font-semibold text-gray-700">
                    {user?.displayName || "Not Set"}
                  </h4>
                </div>
              </div>

              {/* Verification */}
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 hover:bg-orange-50 transition">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">
                  🔐
                </div>

                <div>
                  <p className="text-xs text-gray-400">Account Status</p>

                  <h4 className="font-semibold text-gray-700">
                    {user?.emailVerified
                      ? "Verified Account ✅"
                      : "Not Verified ❌"}
                  </h4>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 space-y-3">
              {/* Reviews */}
              <button
                onClick={() => navigate("/my-reviews")}
                className="
                  w-full
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#FF6B35]
                  to-red-500
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                📋 My Reviews
              </button>

              {/* Favorites */}
              <button
                onClick={() => navigate("/favorites")}
                className="
                  w-full
                  py-3
                  rounded-2xl
                  border border-orange-200
                  bg-orange-50
                  text-[#FF6B35]
                  font-semibold
                  hover:bg-orange-100
                  transition-all duration-300
                "
              >
                ❤️ My Favorites
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="
                  w-full
                  py-3
                  rounded-2xl
                  bg-red-50
                  text-red-500
                  font-semibold
                  hover:bg-red-100
                  transition-all duration-300
                "
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[28px] shadow-2xl w-full max-w-md overflow-hidden border border-orange-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-red-500 px-6 py-5">
              <h3 className="text-2xl font-bold text-white">✏️ Edit Profile</h3>

              <p className="text-orange-100 text-sm mt-1">
                Update your profile information
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdate} className="p-6 space-y-5">
              {/* Avatar Preview */}
              <div className="flex justify-center">
                <img
                  src={photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="preview"
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                />
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  👤 Display Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border border-orange-100
                    bg-orange-50/40
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-300
                    focus:border-orange-400
                    transition-all
                    text-gray-950
                  "
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>

              {/* Photo URL */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  🖼️ Photo URL
                </label>

                <input
                  type="text"
                  placeholder="Paste image URL"
                  className="
                    w-full
                    text-gray-950
                    px-4
                    py-3
                    rounded-2xl
                    border border-orange-100
                    bg-orange-50/40
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-300
                    focus:border-orange-400
                    transition-all
                  "
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="
                    flex-1
                    py-3
                    rounded-2xl
                    bg-gray-100
                    text-gray-700
                    font-semibold
                    hover:bg-gray-200
                    transition
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isUpdating}
                  className="
                    flex-1
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#FF6B35]
                    to-red-500
                    text-white
                    font-semibold
                    hover:scale-[1.02]
                    transition-all
                    disabled:opacity-60
                  "
                >
                  {isUpdating ? "Saving..." : "Save Changes ✅"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
