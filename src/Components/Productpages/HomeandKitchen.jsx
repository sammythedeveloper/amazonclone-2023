import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";

// Array of products
const homeAndKitchenProducts = [

  {
    id: "2",
    title: "iPhone Air super thin. Strikingly light.Shockingly strong.",
    rating: 5,
    price: 1449,
    image: require("../../images/Smartphones/iphoneAir.jpg"),
  },
  {
    id: "1",
    title: "Samsung Galaxy S25 Ultra (512GB, 12GB RAM), Galaxy AI, 6.9”",
    rating: 4,
    price: 1484,
    image: require("../../images/Smartphones/samsung1.jpg"),
  },
  {
    id: "3",
    title: "Samsung Galaxy Z Flip5 256GB Graphite (Renewed)",
    rating: 5,
    price: 789,
    image: require("../../images/Smartphones/samsung flip.jpg"),
  },
  {
    id: "4",
    title: "Google Pixel 9a - 128 GB -Unlocked Android Smartphone with AI Camera, All-Day Battery and Powerful Security - Obsidian",
    rating: 5,
    price: 999,
    image: require("../../images/Smartphones/Pixel10(3).jpg"),
  },
  {
    id: "5",
    title: "OPPO Find N5 Misty White",
    rating: 3,
    price: 2779,
    image: require("../../images/Smartphones/oppo.jpg"),
  },
  {
    id: "6",
    title: "PRAKI Airtight Food Storage Container Set",
    rating: 4,
    price: 24,
    image: require("../../images/Home&Kitchen/18.jpg"),
  },
  {
    id: "7",
    title: "StepRite Kitchen Mats, 2PCS Kitchen Rugs, Cushioned Anti Fatigue Kitchen Mats for Floor",
    rating: 5,
    price: 24.99,
    image: require("../../images/Home&Kitchen/19.jpg"),
  },
  {
    id: "8",
    title: "PHILIPS 3200 Series Fully Automatic Espresso Machine",
    rating: 4,
    price: 79,
    image: require("../../images/Home&Kitchen/20.jpg"),
  },
];

const HomeAndKitchen = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Phones
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Discover the latest smartphones, top brands, and unbeatable deals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {homeAndKitchenProducts.map((product) => (
            <ProductDetail
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              image={product.image}
              className="w-full h-64 md:h-72 object-contain"
            />
          ))}
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default HomeAndKitchen;
