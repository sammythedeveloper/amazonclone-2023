import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductDetail = ({ id, title, image, rating: initialRating, price ,desc }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [rating, setRating] = useState(initialRating);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md m-2 sm:m-3 flex flex-col hover:shadow-lg transition-shadow duration-300 max-w-[300px] mx-auto">
      {/* Image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-60 md:h-72 object-contain p-2"
        />
      </div>

      {/* Info */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
          {title}
        </h3>
        <h3 className="text-xs sm:text-xsm font-light text-gray-800 mb-1 sm:mb-2 line-clamp-2">
          {desc}
        </h3>
        {/* Rating */}
        <div className="flex mb-1 sm:mb-2 text-orange-400">
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarRateIcon
                key={i}
                className={`${
                  i < rating ? "text-orange-400" : "text-gray-300"
                } text-sm sm:text-base`}
                onClick={() => setRating(i + 1)}
              />
            ))}
        </div>

        {/* Price */}
        <p className="text-gray-900 font-bold mb-2 text-sm sm:text-base">
          ${price}
        </p>

        {/* Button */}
        <button
          className="w-full py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs sm:text-sm"
          onClick={addToBasket}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
