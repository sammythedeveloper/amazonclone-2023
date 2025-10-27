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
import Phones from "./Components/Productpages/Phones";
import Beauty from "./Components/Productpages/Beauty";
import Clothing from "./Components/Productpages/Clothing";
import Gifts from "./Components/Productpages/Gifts";
import Gaming from "./Components/Productpages/Gaming";
import TopDeal from "./Components/Productpages/TopDeal";
import Women from "./Components/Productpages/Women";
import Luxury from "./Components/Productpages/Luxury";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";
import ProtectedRoute from "./ProtectedRoute";
import ProductPage from "./Components/ProductPage";

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
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/Checkout"
          element={
            <>
              <NavBar />
              <Checkout />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <NavBar />
            <HomePage />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* ✅ Dynamic category route */}
      <Route
        path="/category/:category"
        element={
          <ProtectedRoute>
            <NavBar />
            <ProductPage />
            <Footer />
          </ProtectedRoute>
        }
      />
      </Routes>

      <Routes>
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
              <Footer />
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
              <Footer />
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
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Phones"
          element={
            <>
              <NavBar />
              <Phones />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Cameras"
          element={
            <>
              <NavBar />
              <Beauty />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/SmartLifestyle"
          element={
            <>
              <NavBar />
              <Clothing />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/SmartWatche"
          element={
            <>
              <NavBar />
              <Gifts />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Gaming"
          element={
            <>
              <NavBar />
              <Gaming />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Accessories"
          element={
            <>
              <NavBar />
              <Luxury />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Laptops"
          element={
            <>
              <NavBar />
              <TopDeal />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/HeadPhones"
          element={
            <>
              <NavBar />
              <Women />
              <Footer />
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
              <Footer />
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
