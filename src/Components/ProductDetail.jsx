import React from "react";
import { useStateValue } from "./StateProvider";
import StarRateIcon from '@mui/icons-material/StarRate';

const ProductDetail = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image:image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="h-[520px] bg-white z-30 m-3  ">
      <div className="h-[300px] m-4">
        <img className="h-[100%] object-cover " src={image} />
      </div>
      <div className="text-lg xl:text-xl font-light ml-4 mt-4  ">{title}</div>
      <div className=" flex text-xs xl:text:sm text-orange-500 ml-4">   {Array(rating)
            .fill()
            .map(() => (
              <p className=" fill-orange-500 text-orange-500 "><StarRateIcon/> </p>
            ))}</div>   
      <div className="text-xs xl:text:sm text-black ml-4">
        <p>${price}</p>
      </div>
      <button
        className="  w-32 h-7 ml-4 mt-3 text-sm bg-yellow-400 rounded-lg border-2 hover:border-black "
        onClick={addToBasket}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetail;
