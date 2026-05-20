import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[90vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>

            <div className="hero-content text-neutral-content text-center px-4">
              <div className="max-w-4xl">
                <p className="mb-4 text-[#FFB089] font-semibold tracking-widest uppercase">
                  Discover Amazing Foods
                </p>

                <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Explore Local Flavors Around You
                </h1>

                <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Find authentic local restaurants, share your food experiences,
                  and connect with passionate food lovers from your community.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/all-reviews"
                    className="bg-[#FF6B35] hover:bg-[#e85d2d] text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-xl"
                  >
                    Explore Reviews
                  </Link>

                  <Link
                    to="/add-review"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
                  >
                    Share Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[90vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>

            <div className="hero-content text-neutral-content text-center px-4">
              <div className="max-w-4xl">
                <p className="mb-4 text-[#FFB089] font-semibold tracking-widest uppercase">
                  Community Food Reviews
                </p>

                <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Taste The Best Hidden Food Gems
                </h1>

                <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Read honest reviews, discover trending dishes, and support
                  your favorite local food spots.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/all-reviews"
                    className="bg-[#FF6B35] hover:bg-[#e85d2d] text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-xl"
                  >
                    Discover Foods
                  </Link>

                  <Link
                    to="/register"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[90vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>

            <div className="hero-content text-neutral-content text-center px-4">
              <div className="max-w-4xl">
                <p className="mb-4 text-[#FFB089] font-semibold tracking-widest uppercase">
                  Foodie Lifestyle
                </p>

                <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Share Your Favorite Food Stories
                </h1>

                <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Upload reviews, rate restaurants, and inspire others with your
                  foodie adventures.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/add-review"
                    className="bg-[#FF6B35] hover:bg-[#e85d2d] text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-xl"
                  >
                    Add Review
                  </Link>

                  <Link
                    to="/all-reviews"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300"
                  >
                    Browse Foods
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
