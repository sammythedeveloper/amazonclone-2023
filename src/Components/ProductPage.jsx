import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./ProductsData";
import ProductDetail from "./ProductDetail";
import { Carousel } from ".";

// Mapping for dynamic category titles and descriptions
const categoryInfo = {
  phones: {
    title: "Phones",
    description:
      "Discover the latest smartphones, top brands, and unbeatable deals.",
  },
  laptops: {
    title: "Laptops",
    description:
      "Explore high-performance laptops for work, gaming, and creativity.",
  },
  gaming: {
    title: "Gaming",
    description: "Upgrade your gaming setup with top gear and accessories.",
  },
  headphones: {
    title: "Headphones",
    description: "Experience premium sound with our headphone collection.",
  },
  cameras: {
    title: "Cameras",
    description: "Capture every moment with the latest cameras and lenses.",
  },
  accessories: {
    title: "Accessories",
    description: "Find all the tech accessories you need in one place.",
  },
  smartwatches: {
    title: "Smart Watches",
    description: "Stay connected and stylish with smart watches.",
  },
  smartlife: {
    title: "Smart Lifestyle",
    description: "Enhance your daily life with smart lifestyle gadgets.",
  },
};

const ProductPage = () => {
  const { category } = useParams(); // e.g., "phones", "laptops", etc.
  const categoryData = productsData[category];
  const info = categoryInfo[category];

  if (!categoryData) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-2xl font-semibold">Category not found 😢</h2>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-8 bg-gray-50 min-h-screen">
      {/* Dynamic Category Header */}
      {info && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {info.title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            {info.description}
          </p>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {categoryData.map((item) => (
          <ProductDetail
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default ProductPage;
