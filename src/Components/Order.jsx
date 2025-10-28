import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProducts";

const Order = ({ order }) => {
  return (
    <div className="sm:w-[600px] md:w-auto sm:mx-8 md:mx-20 bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="mb-4">
        <h1 className="text-lg font-bold text-gray-700">Order</h1>
        <p className="text-sm text-gray-500">
          {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
        </p>
      </div>

      <p className="flex justify-end text-xs text-gray-400 mb-4">
        <small>{order.id}</small>
      </p>

      <div className="space-y-4">
        {order.data.basket?.map((item, index) => (
          <CheckoutProduct
            key={index}
            id={item.id}
            title={item.title}
            image={process.env.PUBLIC_URL + item.image} // relative path fix
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="font-semibold text-gray-700">
              Order Total: {value}
            </h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
};

export default Order;
