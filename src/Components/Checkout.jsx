import React from "react";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className=" w-full flex ">
      <div className="  mr ">
        <h2 className=" text-2xl font-bold my-6 ml-3 ">Your Cart</h2>
        <h3 className=" ml-3 font-medium mb-3 ">Your items</h3>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className=" ml-3 font-medium mb-3 ">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
