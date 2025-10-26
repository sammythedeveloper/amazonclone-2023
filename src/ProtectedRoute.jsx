import React from "react";
import { Navigate } from "react-router-dom";
import { useStateValue } from "../src/Components/StateProvider";

const ProtectedRoute = ({ children }) => {
  const [{ user }] = useStateValue();

  if (!user) {
    return <Navigate to="/Signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
