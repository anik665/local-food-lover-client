import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/card/Card";
import { useState, useEffect } from "react";

const AllReviews = () => {
  const data = useLoaderData();
  // console.log(data);
  const axios = useAxios();

  const [search, setsearch] = useState("");

  const [reviews, setReviews] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        search ? `/products?search=${search}` : `/products`,
      );
      setReviews(res.data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-[#FF6B35] font-semibold uppercase tracking-[4px] mb-3">
            Food Community
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            Explore All Food Reviews
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Discover honest reviews, trending local foods, and amazing dining
            experiences shared by passionate food lovers.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex text-black justify-center mb-14">
          <div className="w-full max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search food reviews..."
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-[#FF6B35] shadow-sm"
            />
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD */}
          {reviews.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
