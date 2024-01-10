import React, { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/Firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Products } from "./Components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import Checkout from "./Components/Checkout";
import HomeandKitchen from "./Components/Productpages/HomeandKitchen";
import Beauty from "./Components/Productpages/Beauty";
import Clothing from "./Components/Productpages/Clothing";
import Gifts from "./Components/Productpages/Gifts";
import Office from "./Components/Productpages/Office";
import TopDeal from "./Components/Productpages/TopDeal";
import Women from "./Components/Productpages/Women";
import Luxury from "./Components/Productpages/Luxury";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";

const key = loadStripe(
  "pk_test_51OMyLMHyEXHJUIn2SiwK4uPGQ7UCWEHnnLHu00idi1F21aJF5sL2fjawdt9zjKHbLuCK7aGctzxINMaheR70WQr500uAwonRLZ"
);
const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in /the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route
          path="/Checkout"
          element={
            <>
              <NavBar />
              <Checkout />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomePage />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Signin"
          element={
            <>
              <Signin />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Products"
          element={
            <>
              <NavBar />
              <Products />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/HomeandKitchen"
          element={
            <>
              <NavBar />
              <HomeandKitchen />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Beauty"
          element={
            <>
              <NavBar />
              <Beauty />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Clothing"
          element={
            <>
              <NavBar />
              <Clothing />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Gifts"
          element={
            <>
              <NavBar />
              <Gifts />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Office"
          element={
            <>
              <NavBar />
              <Office />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Luxury"
          element={
            <>
              <NavBar />
              <Luxury />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/TopDeal"
          element={
            <>
              <NavBar />
              <TopDeal />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Women"
          element={
            <>
              <NavBar />
              <Women />
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Payment"
          element={
            <>
              <NavBar />
              <Elements stripe={key}>
                <Payment />
              </Elements>
              <Footer/>
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Orders"
          element={
            <>
              <NavBar />
              <Orders />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
