import React, { use, useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContex";

const Register = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log({
      name,
      photo,
      email,
      password,
      confirmPassword,
    });
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err.code));
    console.log("Google Signup");
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-[#FF6B35] text-white p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white text-[#FF6B35] p-3 rounded-2xl text-2xl">
              <FaUtensils />
            </div>

            <h1 className="text-4xl font-bold">FoodieNest</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Join The Food Lovers Community
          </h2>

          <p className="text-lg text-orange-100 leading-relaxed">
            Share your favorite local food experiences, discover hidden gems,
            and connect with food lovers around you.
          </p>

          <img
            className="mt-10 rounded-3xl object-cover h-[320px]"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14">
          {/* MOBILE LOGO */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="bg-[#FF6B35] text-white p-2 rounded-xl text-xl">
              <FaUtensils />
            </div>

            <h1 className="text-3xl font-bold text-gray-800">FoodieNest</h1>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Welcome! Please enter your details.
          </p>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleSignup}
            className="w-full border border-gray-300 rounded-2xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition font-medium"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <p className="text-gray-400 text-sm">OR</p>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* PHOTO URL */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Photo URL
              </label>

              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FF6B35] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
