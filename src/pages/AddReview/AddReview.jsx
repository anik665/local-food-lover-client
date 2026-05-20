import useAxios from "../../hooks/useAxios";

const AddReview = () => {
  const axios = useAxios();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const imgUrl = form.imgUrl.value;
    const rating = form.rating.value;
    const location = form.location.value;
    const review = form.review.value;
    const reviewsInfo = {
      foodName,
      imgUrl,
      rating,
      location,
      review,
    };
    try {
      const res = await axios.post("/products", reviewsInfo);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">
      <div className="max-w-3xl   text-black mx-auto bg-white rounded-3xl shadow-xl p-8">
        {/* TITLE */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Add Review 🍔</h1>

          <p className="text-gray-500 mt-2">
            Share your favorite food experience
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handelSubmit} className="space-y-5">
          {/* FOOD NAME */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Food Name
            </label>

            <input
              type="text"
              name="foodName"
              placeholder="Enter food name"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
              required
            />
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Food Image URL
            </label>

            <input
              type="text"
              name="imgUrl"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
              required
            />
          </div>

          {/* RATING */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Rating
            </label>

            <select
              name="rating"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          {/* LOCATION */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Restaurant location"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35]"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Review Description
            </label>

            <textarea
              rows="5"
              name="review"
              placeholder="Write your experience..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#FF6B35] resize-none"
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#e85d2d] text-white py-3 rounded-2xl font-semibold transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
