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
    title: "Nothing Phone (2a) 12+256GB - Handy ohne vertrag mit Nothing OS 2.5 -",
    rating: 4,
    price: 524,
    image: require("../../images/Smartphones/Nothing.jpg"),
  },
  {
    id: "7",
    title: "ONEPLUS OnePlus 10 Pro | 5G Android Smartphone | 8GB+128GB | Unlocked | Triple Camera co-Developed with Hasselblad | Volcanic Black",
    rating: 5,
    price: 399,
    image: require("../../images/Smartphones/onePlus.jpg"),
  },
  {
    id: "8",
    title: "Samsung Galaxy Z Fold7, 256GB, Jet Black (CAD Version & Warranty) - AI Smartphone, Snapdragon 8 Elite, 200MP, Foldable Dynamic AMOLED Display, Mult-Tasking w/Galaxy AI",
    rating: 4,
    price: 2479,
    image: require("../../images/Smartphones/zfold.jpg"),
  },
];

const Phones = () => {
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
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
      </div>
      <Carousel />
    </div>
  );
};

export default Phones;
