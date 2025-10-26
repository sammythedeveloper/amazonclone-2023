import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Search from "./Search";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import Logo from '../images/shop.png'


const NavBar = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="min-w-[1200px]">
      <div className="flex bg-black text-white h-[120px]">
    

        <div className="flex items-center m-4 ">
          <div><p>NovaShop</p></div>
          <Link to="/">
            <img
              className="h-[70px] w-[70px]"
              src={Logo}
            />
          </Link>
          <LocationOnOutlinedIcon />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:small">Deliver to,</div>
            <div className="text-sm xl:text-base font-bold"> {!user ? "Login" : user.email}</div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center m-4">
          <Link to={!user && "/Signin"}   >
          <div onClick={handleAuthentication} className="pr-4 pl-4">
            <div className="text-xs xl:small">
                Hello,
                {!user ? "" : user.email}
                <br />
                {user ? "Sign out" : "Sign In"}
            </div>
              <div className="text-sm xl:text-base font-bold">Account& Lists</div>
            </div>
            </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:small">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to="/Checkout" >
          <div className="flex pr-3 pl-3">
            <PiShoppingCartSimpleLight className="h-[48px] " />
            <div className="mt-4 pl-1 text-xs xl:sm font-bold">
              {basket.length} Cart
            </div>
            </div>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
