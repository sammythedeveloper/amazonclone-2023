import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductDetail = ({ id, title, image, rating: initialRating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  
  // Local state for user rating
  const [rating, setRating] = useState(initialRating);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  // Function to handle star click
  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md m-3 flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-72 object-contain p-2"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h3 className="text-sm font-medium text-gray-800 mb-2">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex mb-2 text-orange-400 cursor-pointer">
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarRateIcon
                key={i}
                className={i < rating ? "text-orange-400" : "text-gray-300"}
                onClick={() => handleRatingClick(i)}
              />
            ))}
        </div>

        {/* Price */}
        <p className="text-black font-normal text-sm mb-3">${price}</p>

        {/* Add to Cart */}
        <button
          className="w-full py-2 bg-blue-400 rounded-lg border-2 hover:bg-blue-500 text-white text-sm font-light"
          onClick={addToBasket}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
