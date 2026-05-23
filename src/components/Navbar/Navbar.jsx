import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContex";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Firebase user later

  const { user, signOuts } = useContext(AuthContext);
  console.log(user);
  const handelsignOut = () => {
    signOuts();
  };

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

      <>
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
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-[#FF6B35]"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <Link to="/" className="ml-3 lg:ml-0 flex items-center gap-2">
            <div className="bg-[#FF6B35] p-2 rounded-xl text-white text-xl">
              <FaUtensils />
            </div>

            <h1 className="text-2xl font-bold text-gray-800">FoodieNest</h1>
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 font-medium">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="w-10 h-10 rounded-full border-2 border-[#FF6B35]"
                src="https://i.ibb.co/4pDNDk1/avatar.png"
                alt=""
              />
              <Link
                onClick={handelsignOut}
                className="px-5 py-2 rounded-xl bg-[#FF6B35] text-white hover:bg-[#e85d2d] transition"
              >
                {" "}
                logout
              </Link>
            </>
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
