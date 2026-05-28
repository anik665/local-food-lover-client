import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContex";
import { TbLogout } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, signOuts } = useContext(AuthContext);

  const handelsignOut = () => {
    signOuts();
    navigate("/login");
  };

  // ✅ Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#FF6B35] text-white"
                : "text-gray-700 hover:bg-orange-100 hover:text-[#FF6B35]"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-reviews"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#FF6B35] text-white"
                : "text-gray-700 hover:bg-orange-100 hover:text-[#FF6B35]"
            }`
          }
        >
          All Reviews
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/add-review"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#FF6B35] text-white"
                : "text-gray-700 hover:bg-orange-100 hover:text-[#FF6B35]"
            }`
          }
        >
          Add Review
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-reviews"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#FF6B35] text-white"
                : "text-gray-700 hover:bg-orange-100 hover:text-[#FF6B35]"
            }`
          }
        >
          My Reviews
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-300 ${
              isActive
                ? "bg-[#FF6B35] text-white"
                : "text-gray-700 hover:bg-orange-100 hover:text-[#FF6B35]"
            }`
          }
        >
          Favorites
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-[#FF6B35]"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <Link to="/" className="ml-3 lg:ml-0 flex items-center gap-2">
            <div className="bg-[#FF6B35] p-2 rounded-xl text-white text-xl">
              <FaUtensils />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">FoodieNest</h1>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 font-medium">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {user ? (
            // ✅ Avatar with Dropdown
            <div className="relative" ref={dropdownRef}>
              {/* Avatar Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B35] hover:ring-2 hover:ring-orange-300 transition"
              >
                <img
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* ✅ Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100">
                  {/* Profile Info */}
                  <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                    <img
                      src={user?.photoURL || <FaUserLarge />}
                      alt="avatar"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B35]"
                    />
                    <div>
                      <p className="font-bold text-gray-800 text-sm">
                        {user?.displayName || "No Name"}
                      </p>
                      <p className="text-gray-400 text-xs truncate w-36">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <ul className="py-2 px-2">
                    <li>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate("/profile");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-[#FF6B35] transition text-sm"
                      >
                        <span>👤</span> My Profile
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate("/my-reviews");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-[#FF6B35] transition text-sm"
                      >
                        <span>📋</span> My Reviews
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          navigate("/favorites");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-[#FF6B35] transition text-sm"
                      >
                        <span>❤️</span> Favorites
                      </button>
                    </li>
                  </ul>

                  {/* Logout */}
                  <div className="border-t border-gray-100 p-2">
                    <button
                      onClick={handelsignOut}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 text-red-500 transition text-sm font-medium"
                    >
                      <span>
                        {" "}
                        <TbLogout />
                      </span>{" "}
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl bg-[#FF6B35] text-white hover:bg-[#e85d2d] transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-xl border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col gap-2 p-4 font-medium">
            {links}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block text-center bg-[#FF6B35] text-white py-2 rounded-xl"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block text-center border border-[#FF6B35] text-[#FF6B35] py-2 rounded-xl"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
