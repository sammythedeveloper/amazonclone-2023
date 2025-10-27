import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";

// Array to store product data
const Gamings = [
  {
    id: "41",
    title: "FLEXISPOT 35in Standing Desk Converter Height Adjustable Sit",
    rating: 5,
    price: 129,
    image: require("../../images/Gaming/1.jpg"), // Updated path for image
  },
  {
    id: "42",
    title: "EUREKA ERGONOMIC Height Adjustable Computer Tower Stand",
    rating: 4,
    price: 16.99,
    image: require("../../images/Gaming/2.jpg"), // Updated path for image
  },
  {
    id: "43",
    title: "Ivoler Laptop Stand, Laptop Holder Riser Computer Tablet Stand",
    rating: 3,
    price: 38,
    image: require("../../images/Gaming/3.jpg"), // Updated path for image
  },
  {
    id: "44",
    title: "Dealusy 4 Set Glass Cups with Lids and Straws 16 oz",
    rating: 5,
    price: 159.99,
    image: require("../../images/Gaming/4.jpg"), // Updated path for image
  },
  {
    id: "45",
    title: "ErGear Electric Standing Desk Adjustable Height, 48 x 24 Inches Desktop with Hidden AC&DC Outlet",
    rating: 5,
    price: 199.99,
    image: require("../../images/Gaming/5.jpg"), // Updated path for image
  },
  {
    id: "46",
    title: "Hopipad Topographic Large Gaming Mouse Pad for Desk, Desk Mat with Seamed Edges, Waterproof Desk Pad",
    rating: 3,
    price: 12.99,
    image: require("../../images/Gaming/6.jpg"), // Updated path for image
  },
  {
    id: "47",
    title: "Bestier Gaming Floating Shelves, 34 inch LED Wall Mounted Shelf",
    rating: 4,
    price: 129.99,
    image: require("../../images/Gaming/7.jpg"), // Updated path for image
  },
  {
    id: "48",
    title: "PatioMage Ergonomic Gaming Chair with Footrest Big and Tall Game Chair Reclining Gamer Chair",
    rating: 5,
    price: 223.99,
    image: require("../../images/Gaming/8.jpg"), // Updated path for image
  },
];

const Gaming = () => {
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
        {Gamings.map((product) => (
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

export default Gaming;
