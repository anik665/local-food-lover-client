import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContex";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, signInwithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    signInwithEmail(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <>
      {isSubmitting && (
        <span className="loading loading-spinner text-warning"></span>
      )}
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
              Explore amazing local food reviews, discover hidden restaurants,
              and share your foodie journey with the community.
            </p>

            <img
              className="mt-10 rounded-3xl object-cover h-[320px]"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
              alt="food"
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
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border text-gray-950 border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-medium text-gray-700">Password</label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#FF6B35] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full text-gray-950 border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
              >
                Login
              </button>
            </form>

            {/* REGISTER LINK */}
            <p className="text-center text-gray-500 mt-8">
              Don't have an account?{" "}
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
    </>
  );
};

export default Login;
