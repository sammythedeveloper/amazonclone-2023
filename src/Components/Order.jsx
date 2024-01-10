import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProducts";

const Order = ({ order }) => {
  return (
    <div className="sm:w-[600px] md:w-auto sm:ml-32  md:ml-44 sm:mr-32 md:mr-44 shadow-md " >
      <div className=" text-base p-10" >
      <h1>Order</h1>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      </div>
      <p className=" flex justify-end text-sm ">
        <small>{order.id}</small>
        </p>
       
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <div className=" flex justify-end" >
      <CurrencyFormat
        renderText={(value) => (
          <h3 className=" font-semibold text-gray-600 ">Order Total: {value}</h3>
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
