import React from "react";
import { useStateValue } from "./StateProvider";
import StarRateIcon from "@mui/icons-material/StarRate";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className=" w-auto grid grid-cols-4 ml-4 mb-3  ">
      <img className="h-[100%] w-200 object-contain " src={image} alt="" />
      <div className="col-span-3 mx-6">
        <p className="text-lg xl:text-xl font-bold ml-4 my-2 line-clamp-3">{title}</p>
        <p className="ext-lg xl:text-xl font-semibold ml-4 mt-4 flex">
          <p> $</p>
          <p>{price}</p>
        </p>
        <div className="flex fill-orange-500 text-orange-500  ml-3">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRateIcon />{" "}
              </p>
            ))}
        </div>
          {!hideButton && (
            <button className=" pl-2 pr-3 w-38 h-6 ml-2 mt-3 text-xs text-white bg-blue-400 hover:bg-blue-500 rounded-lg " onClick={removeFromBasket}>Remove from Basket</button>
          )}
          {""}
      </div>
      
    </div>
  );
}

export default CheckoutProduct;
