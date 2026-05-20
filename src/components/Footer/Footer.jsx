import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaUtensils,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO & ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#FF6B35] p-3 rounded-2xl text-2xl">
              <FaUtensils />
            </div>

            <h2 className="text-3xl font-bold">FoodieNest</h2>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Discover local food experiences, honest restaurant reviews, and
            connect with passionate food lovers around you.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="/"
              className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="/"
              className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition duration-300"
            >
              <FaXTwitter />
            </a>

            <a
              href="/"
              className="bg-white/10 hover:bg-[#FF6B35] p-3 rounded-full transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              <Link
                to="/"
                className="hover:text-[#FF6B35] transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/all-reviews"
                className="hover:text-[#FF6B35] transition duration-300"
              >
                All Reviews
              </Link>
            </li>

            <li>
              <Link
                to="/add-review"
                className="hover:text-[#FF6B35] transition duration-300"
              >
                Add Review
              </Link>
            </li>

            <li>
              <Link
                to="/my-reviews"
                className="hover:text-[#FF6B35] transition duration-300"
              >
                My Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-3">
              <FaLocationDot className="text-[#FF6B35] mt-1 text-lg" />

              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FF6B35]" />

              <p>support@foodienest.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-[#FF6B35]" />

              <p>+880 1234-567890</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Newsletter</h3>

          <p className="text-gray-300 mb-5 leading-relaxed">
            Subscribe to get the latest food reviews and foodie updates.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-[#FF6B35]"
            />

            <button className="w-full bg-[#FF6B35] hover:bg-[#e85d2d] py-3 rounded-2xl font-semibold transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p className="text-center md:text-left">
            © 2026 FoodieNest. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-[#FF6B35] transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-[#FF6B35] transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
