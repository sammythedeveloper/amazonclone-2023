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
        <img
          height={150}
          width={150}
          className=""
          src={"https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"}
        />
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
              className=" w-full text-white bg-orange-400 hover:bg-orange-500 font-medium text-sm py-2.5 rounded-lg px-5 text-center  "
              type="submit"
              onClick={signIn}
            >
              Sign in
            </button>
            <p>
              By continuing,you agree to Amazon's {""}
              <a
                className=" text-orange-600 hover:underline "
                href="Conditions of Use"
              >
                Conditions of Use{" "}
              </a>
              and
              <a
                className=" text-orange-600 hover:underline "
                href="Privacy Notice"
              >
                {" "}
                Privacy Notice
              </a>
            </p>
            <button onClick={register} className="w-full text-white bg-orange-400 hover:bg-orange-500 font-medium text-sm py-2.5 rounded-lg px-5 text-center ">
              Create your Amazon Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
