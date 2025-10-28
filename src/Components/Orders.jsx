import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "./Firebase";
import Order from "./Order";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center sm:text-left mt-10">
          You haven’t placed any orders yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow flex flex-col"
            >
              <Order order={order} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
