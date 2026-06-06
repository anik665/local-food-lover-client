import React from "react";
import { FaUsers, FaStar, FaUtensils, FaRegCommentDots } from "react-icons/fa";

const CommunityStatistics = () => {
  const stats = [
    {
      id: 1,
      icon: <FaRegCommentDots size={40} />,
      number: "500+",
      title: "Reviews Shared",
    },
    {
      id: 2,
      icon: <FaUsers size={40} />,
      number: "250+",
      title: "Food Lovers",
    },
    {
      id: 3,
      icon: <FaUtensils size={40} />,
      number: "120+",
      title: "Restaurants Reviewed",
    },
    {
      id: 4,
      icon: <FaStar size={40} />,
      number: "4.8",
      title: "Average Rating",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Community
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Food Lovers in Numbers
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Our growing community is helping food enthusiasts discover amazing
            meals, restaurants, and dining experiences every day.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-orange-50 border border-orange-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center text-orange-500 mb-5">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-gray-800">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-600 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-3">Join Our Food Community</h3>

          <p className="max-w-xl mx-auto opacity-90 mb-6">
            Share your favorite food experiences, discover hidden gems, and help
            others find their next delicious meal.
          </p>

          <button className="btn bg-white  text-orange-500 hover:border-2 hover:border-orange-800  rounded-full px-8">
            Explore Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityStatistics;
