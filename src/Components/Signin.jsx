import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, } from "firebase/auth";
import amazonLogo from '../images/amazon.png'; 

function SignUp() {
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
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     <Link to="/">
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#000000"
    height="150"
    width="150"
  >
    <rect x="244" y="361.124" width="24" height="84.784" />
    <rect x="131.472" y="433.924" width="249.04" height="24" />
    <rect y="54.076" width="512" height="315.04" />
    <path
      fill="#E21B1B"
      d="M317.304,157.588h-15.896v-35.872c0-4.384-3.56-7.944-7.944-7.944h-74.832
      c-4.384,0-7.944,3.56-7.944,7.944v35.872h-15.896v-35.872c0-13.144,10.696-23.84,23.84-23.84h74.832
      c13.144,0,23.84,10.696,23.84,23.84V157.588z"
    />
    <path
      fill="#E21B1B"
      d="M164.616,148.276l-35.72,172.496H383.2l-35.72-172.496H164.616z"
    />
    <rect x="132.784" y="194.084" width="246.528" height="15.896" />
  </svg>
</Link>
      <div className=" w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-6 sm:p-8">
          <h1 className=" text-x1 font-bold leading-tight tracking-tight text-gray-900 md:text-2x1">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
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
              onClick={signIn}
            >
              Sign in
            </button>
            <p>
              By continuing,you agree to Amazon's {""}
              <a
                className=" text-red-500 hover:underline "
                href="Conditions of Use"
              >
                Conditions of Use{" "}
              </a>
              and
              <a
                className=" text-red-500 hover:underline "
                href="Privacy Notice"
              >
                {" "}
                Privacy Notice
              </a>
            </p>
            <button onClick={() => navigate("/Signup")} className="w-full text-white bg-red-500 hover:bg-red-600 font-medium text-sm py-2.5 rounded-lg px-5 text-center ">
              Create your Amazon Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
