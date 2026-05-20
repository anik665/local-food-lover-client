import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUtensils } from "react-icons/fa";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
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
            Welcome Back Foodie!
          </h2>

          <p className="text-lg text-orange-100 leading-relaxed">
            Explore amazing local food reviews, discover hidden restaurants, and
            share your foodie journey with the community.
          </p>

          <img
            className="mt-10 rounded-3xl object-cover h-[320px]"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
          {/* MOBILE LOGO */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="bg-[#FF6B35] text-white p-2 rounded-xl text-xl">
              <FaUtensils />
            </div>

            <h1 className="text-3xl font-bold text-gray-800">FoodieNest</h1>
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-2">Login</h2>

          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details.
          </p>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleLogin}
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
          <form onSubmit={handleLogin} className="space-y-5">
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
              <div className="flex items-center justify-between mb-2">
                <label className="font-medium text-gray-700">Password</label>

                <a href="#" className="text-sm text-[#FF6B35] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          {/* REGISTER */}
          <p className="text-center text-gray-500 mt-8">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#FF6B35] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
