import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from 'react-router-dom'

function SubTotal() {

  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal=(basket)=>
  basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
          />
      <button className=" pl-2 pr-3 w-48 h-8 ml-2 mt-3 mr-4 text-xs bg-yellow-400 rounded-lg border-2 hover:border-black " onClick={(e) => navigate('/payment')} >Proceed to Checkout</button>
      {/* <button className=" pl-2 pr-2 w-48 h-8 ml-2 mt-3  text-xs bg-white rounded-lg border-2 hover:border-black  "  onClick={(e) => navigate.goBack('/Checkout')} >Go back to cart</button> */}
    </div>
  );
}

export default SubTotal;
