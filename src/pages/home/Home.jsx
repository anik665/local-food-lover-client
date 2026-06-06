import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Herosection";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/card/Card";
import PopularCatagori from "./PopularCatagori";
import CommunityStatistics from "./Community";

const Home = () => {
  const axios = useAxios();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/latest-reviews");
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="bg-[#FFF8F0]">
      <Hero />
      {/** latest reviews sections*/}

      <div className=" min-h-screen py-12 mt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item) => {
              return <Card key={item._id} item={item} />;
            })}
          </div>
        </div>
        // Popular catagoris
        <PopularCatagori />
        //community section
        <CommunityStatistics />
      </div>
    </div>
  );
};

export default Home;
