import React from "react";
import {
  FaPizzaSlice,
  FaHamburger,
  FaCoffee,
  FaIceCream,
} from "react-icons/fa";
import { GiNoodles, GiHotMeal } from "react-icons/gi";

const PopularCategories = () => {
  const categories = [
    {
      name: "Pizza",
      icon: <FaPizzaSlice size={40} />,
      reviews: "120+ Reviews",
    },
    {
      name: "Burger",
      icon: <FaHamburger size={40} />,
      reviews: "95+ Reviews",
    },
    {
      name: "Biryani",
      icon: <GiHotMeal size={40} />,
      reviews: "150+ Reviews",
    },
    {
      name: "Noodles",
      icon: <GiNoodles size={40} />,
      reviews: "80+ Reviews",
    },
    {
      name: "Coffee",
      icon: <FaCoffee size={40} />,
      reviews: "70+ Reviews",
    },
    {
      name: "Desserts",
      icon: <FaIceCream size={40} />,
      reviews: "110+ Reviews",
    },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Explore Foods
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Popular Food Categories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover the most loved food categories reviewed by our food lovers
            community.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer hover:-translate-y-2 border border-orange-100"
            >
              <div className="flex justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {category.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">{category.reviews}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
