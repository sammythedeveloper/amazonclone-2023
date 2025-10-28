import React from "react";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column - Basket Items */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your Cart</h2>
          <h3 className="text-gray-600 mb-6 font-medium">
            {basket.length > 0
              ? `You have ${basket.length} item${basket.length > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </h3>

          {basket.length > 0 ? (
            <div className="space-y-4">
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={item.id + index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-10">
              Add some products to your cart to see them here.
            </p>
          )}
        </div>

        {/* Right Column - Subtotal */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <SubTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
