import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProducts";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(
        `/payments/create?total=${getBasketTotal(basket) * 100}`
      );
      console.log("Axios response:", response.data);
      setClientSecret(response.data.clientSecret);
      console.log("ClientSecret after set:", response.data.clientSecret);
     

    };
    if (basket.length) getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // Save order in Firestore
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <h1 className="text-3xl sm:text-3xl font-extralight text-center bg-gray-200 p-4  shadow-md">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Delivery Address */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-extralight mb-2">Delivery Address</h3>
          <p className="text-black">{user?.email}</p>
          <p className="text-black">Area 51</p>
          <p className="text-black">Nevada, Las Vegas</p>
        </div>

        {/* Review Items */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-extralight mb-4">Review items and delivery</h3>
          <div className="space-y-4 text-xs text-black   ">
            {basket.map((item, key) => (
              <CheckoutProduct
                key={key}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-sm text-black  font-extralight mb-4">Payment Method</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement
              onChange={handleChange}
              className="p-4 border rounded-lg shadow-sm"
            />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <CurrencyFormat
                renderText={(value) => <h3 className="text-gray-800">Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                className="w-full sm:w-auto px-6 py-2 bg-yellow-500 rounded-lg hover:bg-green-500 transition-colors font-medium "
                disabled={processing || disabled || succeeded}
              >
                {processing ? "Processing..." : "Buy Now"}
              </button>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
