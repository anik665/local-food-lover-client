import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUtensils } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContex";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const { signInWithGoogle, createUser, UpdateProfiles } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // password match check for confirm password field
  const password = watch("password");

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        return UpdateProfiles({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successful",
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

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successful",
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
            alt="food"
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
            className=" btn w-full bg-white border px-4  border-gray-300 hover:bg-gray-100 
            
             text-gray-800 py-4 rounded-2xl"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <p className="text-gray-400 text-sm">OR</p>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border text-black border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* PHOTO URL */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="w-full border text-black border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                {...register("photo", {
                  required: "Photo URL is required",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Please enter a valid URL",
                  },
                })}
              />
              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border text-black border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
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
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border text-black border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  // },
                  // pattern: {
                  //   value: /^(?=.*[A-Z])(?=.*[0-9])/,
                  //   message:
                  //     "Password must have at least 1 uppercase and 1 number",
                  // },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border text-black border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
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
