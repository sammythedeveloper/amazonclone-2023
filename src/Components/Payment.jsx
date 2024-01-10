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
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret whhich allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currenceies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secreat is >>>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="">
        <h1 className=" w-auto text-center p-[20px] font-semibold bg-slate-300 shadow-xl   " >
          Checkout (<Link to="/checkout">{basket?.length}items</Link>)
        </h1>
        <div className="payment__section"></div>
        <div className="payment__title">
          <h3 className=" font-medium text " >Delivery Address</h3>
        </div>
        <div className="">
          <p>{user?.email}</p>
          <p>Area 51</p>
          <p>Nevada,Las Vegas</p>
        </div>
        <div className=" ">
          <div className="m-10 font-medium text ">
            <h3>Review items and delivery</h3>
          </div>
          <div className=" sm:w-[400px] md:w-[800px] ml-44 ">
            {basket.map((item,key) => (
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
        <div className=" bg-slate-300 shadow-xl">
          <div className=" m-10 font-medium text ">
            <h3>Payment Method</h3>
          </div>
          <div className=" sm:w-[400px] md:w-[800px] ml-52 ">
            <form className="w-[300px] text-sm h-[150px] border-neutral-700  "  onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className=" ">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button  className="pl-2 pr-3 w-[180px] h-6 text-xs bg-yellow-400 rounded-lg hover:bg-green-400 "  disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
