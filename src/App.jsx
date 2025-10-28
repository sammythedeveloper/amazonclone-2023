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
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";
import ProtectedRoute from "./ProtectedRoute";
import ProductPage from "./Components/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";

const key = loadStripe(
  "pk_test_51OMyLMHyEXHJUIn2SiwK4uPGQ7UCWEHnnLHu00idi1F21aJF5sL2fjawdt9zjKHbLuCK7aGctzxINMaheR70WQr500uAwonRLZ"
);
const App = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("🔥 Auth changed:", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        {/* Home */}
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

        {/* Category */}
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

        {/* Checkout */}
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

        {/* Sign up / Sign in */}
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="/Signin"
          element={
            <>
              <Signin />
              <Footer />
            </>
          }
        />

        {/* Products */}
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

        {/* Payment */}
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

        {/* Orders */}
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