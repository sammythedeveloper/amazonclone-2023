import React from "react";

const Footer = () => {
  return (
    <div className=" min-w-[1200px]  ">
      <div className=" h-[50px] bg-amazonclone-backtotop text-center pt-3 text-white text-sm ">
        Back to top
      </div>
      <div className=" bg-amazonclone-footer h-[300px] m-auto text-white flex justify-evenly  pt-3 text-sm font-light  ">
        <ul>
          <li className=" mb-3 text-base font-bold   ">Get to Know Us</li>
          <li> Careers </li>
          <li>Amazon Newsletter</li>
          <li>About Amazon</li>
          <li>Accessibility</li>
          <li>Sustainability</li>
          <li>Press Center</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>
        <ul>
          <li className="  mb-3 text-base font-bold  ">Make Money with Us</li>
          <li>Sell on Amazon</li>
          <li>Sell apps on Amazon</li>
          <li>Supply to Amazon</li>
          <li>Protect & Build Your Brand</li>
          <li>Become an Affiliate</li>
          <li>Become a Delivery Driver</li>
          <li>Start a Package Delivery Business</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>›See More Ways to Make Money</li>
        </ul>
        <ul>
          <li className="  mb-3 text-base font-bold ">
            Amazon Payment Products
          </li>
          <li>Amazon Visa</li>
          <li>Amazon Store Card</li>
          <li>Amazon Secured Card</li>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Credit Card Marketplace</li>
          <li>Reload Your Balance</li>
          <li>Gift Cards</li>
          <li>Amazon Currency Converter</li>
        </ul>
        <ul>
          <li className="  mb-3 text-base font-bold  ">Let Us Know</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Amazon Prime</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Your Recalls and Product Safety Alerts</li>
          <li>Help</li>
        </ul>
          </div>
          <div className=" bg-amazonclone-footer h-32 flex justify-evenly  " >
              <div> <img className=" w-[60px] " src="../images/amazon.png" /></div>
              <div className=" w-10 h-8 text-white" >English</div>
          </div>
    </div>
  );
};

export default Footer;
