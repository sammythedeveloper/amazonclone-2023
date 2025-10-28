import React from "react";
import { Carousel } from "./";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Phones from "../images/phones/iphoneAir.jpg";
import Laptops from "../images/laptops/0.jpg";
import HeadPhones from "../images/headphones/0.jpg";
import Gaming from "../images/Gaming/8.jpg";
import Cameras from "../images/cameras/0.jpg";
import Accessories from "../images/accessories/0.jpg";
import SmartWatches from "../images/smartwatches/0.jpg";
import SmartLifestyle from "../images/smartlife/0.jpg";

const categories = [
  {
    title: "Phones",
    image: Phones,
    link: "/category/phones",
    subtitle: "Shop the Winter Sale",
  },
  {
    title: "Laptops",
    image: Laptops,
    link: "/category/laptops",
    subtitle: "See all deals",
  },
  {
    title: "Gaming",
    image: Gaming,
    link: "/category/gaming",
    subtitle: "Upgrade your setup",
  },
  {
    title: "Headphones",
    image: HeadPhones,
    link: "/category/headphones",
    subtitle: "Shop now",
  },
  {
    title: "Cameras",
    image: Cameras,
    link: "/category/cameras",
    subtitle: "Capture the moment",
  },
  {
    title: "Accessories",
    image: Accessories,
    link: "/category/accessories",
    subtitle: "Shop more products",
  },
  {
    title: "Smart Watches",
    image: SmartWatches,
    link: "/category/watches",
    subtitle: "Stay connected",
  },
  {
    title: "Smart Lifestyle",
    image: SmartLifestyle,
    link: "/category/smartlife",
    subtitle: "Live smarter",
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Carousel />
      <motion.h2
        className="text-2xl md:text-4xl font-extralight text-center m-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        Featured Products
      </motion.h2>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 md:h-72 object-contain p-2"
            />
            <div className="p-4 flex flex-col space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500">{cat.subtitle}</p>
              <Link
                to={cat.link}
                className="text-red-600 hover:text-red-700 font-medium mt-2"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* About Section */}
      <motion.section
        className="w-full bg-gray-100 text-center py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          About Nova Shop
        </motion.h2>
        <motion.p
          className="text-black text-2xl font-extralight leading-relaxed max-w-3xl mx-auto #About "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Nova Shop is your ultimate online destination for cutting-edge tech
          products and accessories. From the latest smartphones and laptops to
          gaming gear, smart watches, headphones, and lifestyle gadgets, we
          bring you quality products with unbeatable deals. Our mission is to
          provide a seamless shopping experience, combining innovation, style,
          and convenience so you can enjoy the best of technology, all in one
          place.
        </motion.p>
      </motion.section>
    </div>
  );
};

export default HomePage;
