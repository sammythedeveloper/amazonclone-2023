import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const navLinks = ['Shop', 'About', 'FAQ', 'Gift Card', 'Contact'];

  return (
    <header className="w-full bg-white shadow-md font-sans">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between max-w-[1600px] mx-auto px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extralight text-black">Nova Shop</Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/ /g, '')}`}
              className="text-black hover:text-red-600 font-light text-sm"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="flex items-center border-b border-gray-400 hover:border-red-600 px-2">
          <input
            type="text"
            placeholder={searchActive ? 'Search...' : ''}
            className={`outline-none bg-transparent transition-all duration-300 ${
              searchActive ? 'w-64 px-2 py-1' : 'w-0'
            }`}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
          {!searchActive && <span className="text-gray-500">🔍</span>}
        </div>

        {/* Account & Cart */}
        <div className="flex items-center space-x-6">
          <Link to="/Signin" className="font-medium text-black hover:text-red-600">Sign In</Link>
          <Link to="/Checkout" className="flex items-center space-x-1 text-black hover:text-red-600">
          <GiShoppingBag className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extralight">NovaShop</Link>

        {/* Cart & Hamburger */}
        <div className="flex items-center space-x-4">
          <Link to="/Checkout">
            <GiShoppingBag className="text-2xl" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
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
                to={`/${link.replace(/ /g, '')}`}
                className="text-black hover:text-red-600 font-extralight text-2xl"
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
