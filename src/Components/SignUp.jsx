import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        if (userCredential) navigate("/");
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
    {/* LEFT SECTION */}
    <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-red-700 text-white p-10">
      <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
        Nova Shop
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-md opacity-90">
        Discover amazing deals, sleek designs, and shop with confidence.
      </p>

      {/* Optional Decorative Element */}
      <div className="mt-10">
        <svg
          className="w-40 h-40 opacity-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <rect x="244" y="361.124" width="24" height="84.784" />
          <rect x="131.472" y="433.924" width="249.04" height="24" />
          <rect y="54.076" width="512" height="315.04" />
          <path
            fill="Red"
            d="M317.304,157.588h-15.896v-35.872c0-4.384-3.56-7.944-7.944-7.944h-74.832
         c-4.384,0-7.944,3.56-7.944,7.944v35.872h-15.896v-35.872c0-13.144,10.696-23.84,23.84-23.84h74.832
         c13.144,0,23.84,10.696,23.84,23.84V157.588z"
          />
          <path
            fill="Red"
            d="M164.616,148.276l-35.72,172.496H383.2l-35.72-172.496H164.616z"
          />
          <rect x="132.784" y="194.084" width="246.528" height="15.896" />
        </svg>
      </div>
    </div>
      {/* RIGHT SECTION (FORM) */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Sign Up
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Welcome! Please enter fill the form to sign up.
          </p>
        <div className="p-6 space-y-6 sm:p-8">
            <div>
              <label className=" block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-gray-50 border border-e-black-600 text-gray-900 sm:text-sm rounded-lg
                p-2.5 w-full block"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className=" block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-gray-50 border border-e-black-600 text-gray-900 sm:text-sm rounded-lg
                p-2.5 w-full block"
                placeholder="password"
              />
            </div>
            <button
              className=" w-full text-white bg-red-500 hover:bg-red-600 font-medium text-sm py-2.5 rounded-lg px-5 text-center  "
              type="submit"
              onClick={register}
            >
              Create an account
            </button>
            <p>
              {" "}
              Already have an account?{" "}
              <Link
                to="/Signin"
                className=" font-medium text-primary-600 hover:underline text-red-600 "
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
