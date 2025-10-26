import React from "react";
import { Carousel } from "./";
import { Link } from "react-router-dom";

import kitchen from "../images/Home&Kitchen/7.jpg";
import top from "../images/Best-seller/3.jpg";
import Women from "../images/Women/1.jpg";
import Gaming from "../images/Gaming/out.jpg";
import Beauty from "../images/Beauty/1.jpg";
import Luxury from "../images/Luxury/Luxury.jpg";

const categories = [
  {
    title: "Home & Kitchen",
    image: kitchen,
    link: "/HomeandKitchen",
    subtitle: "Shop the Winter Sale",
  },
  {
    title: "Top Deal",
    image: top,
    link: "/TopDeal",
    subtitle: "See all deals",
  },
  {
    title: "Gaming",
    image: Gaming,
    link: "/Gaming",
    subtitle: "Upgrade your setup",
  },
  {
    title: "Women’s Fashion",
    image: Women,
    link: "/Women",
    subtitle: "Shop now",
  },
  {
    title: "Beauty",
    image: Beauty,
    link: "/Beauty",
    subtitle: "Glow up this season",
  },
  {
    title: "Luxury Picks",
    image: Luxury,
    link: "/Luxury",
    subtitle: "Shop more products",
  },
  {
    title: "Luxury Picks",
    image: Luxury,
    link: "/Luxury",
    subtitle: "Shop more products",
  },
  {
    title: "Luxury Picks",
    image: Luxury,
    link: "/Luxury",
    subtitle: "Shop more products",
  }
];

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Carousel />

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 flex flex-col space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
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
    </div>
  );
};

export default HomePage;
