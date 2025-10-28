import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import CartIcon from "./CartIcon";
import { BsPersonFill } from "react-icons/bs";

const NavBar = () => {
  const [{ user }] = useStateValue();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef(null);

  const navLinks = ["Shop", "About", "FAQ", "Contact"];

  return (
    <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between max-w-[1600px] mx-auto px-6 py-4 min-h-[120px]  ">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-3xl font-normal text-black">Nova Shop</span>
          <span className="text-sm font-light text-black hover:text-gray-400  ">
            Funky Tech Accessories
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6 ">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/ /g, "")}`}
              className="text-black hover:text-gray-400 font-light text-sm"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div
          className="flex items-center border-b border-gray-400 hover:border-red-600 px-2 cursor-text w-max"
          onClick={() => {
            setSearchActive(true);
            inputRef.current.focus();
          }}
        >
          {/* Icon + placeholder when inactive */}
          {!searchActive && (
            <div className="flex items-center text-black space-x-2">
              <HiOutlineMagnifyingGlass className="text-lg" />
              <span>Search</span>
            </div>
          )}

          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            placeholder={searchActive ? "Search" : ""}
            className={`transition-all duration-300 outline-none bg-transparent text-blue-400
          ${searchActive ? "w-96 px-2 py-1" : "w-0"} 
        `}
            onBlur={() => setSearchActive(false)}
          />
        </div>

        {/* Account & Cart */}
        <div className="flex items-center space-x-6 ">
          {user ? (
            <div className="flex items-center space-x-4  cursor-pointer">
              <BsPersonFill />
              <span className="text-blue-600 font-light">
               {user.email.slice(0, 4)}
              </span>
              <span
                className="text-black font-light hover:text-red-600"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </span>
            </div>
          ) : (
            <Link
              to="/Signin"
              className="font-light text-black hover:text-red-600"
            >
              Sign In
            </Link>
          )}

          <Link
            to="/Orders"
            className="font-light text-black hover:text-red-600"
          >
            Orders
          </Link>
          <CartIcon />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extralight">
          NovaShop
        </Link>

        {/* Cart & Hamburger */}
        <div className="flex items-center space-x-4">
          <Link to="/Checkout">
            <GiShoppingBag className="text-2xl" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.replace(/ /g, "")}`}
                className="text-black hover:text-red-600 font-extralight text-xl"
              >
                {link}
              </Link>
            ))}
          </nav>
          {/* Search */}
          <div className="mt-4 border-b border-gray-400 hover:border-red-600 px-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-transparent py-1"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
