import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg';

// Array to store product data and image paths
const products = [
  {
    id: "9",
    title: "Perfume Gift Set includes YSL Perfume for Men, La Nuit De Lhomme EDP Spray For Men",
    rating: 5,
    price: 129,
    image: require("../../images/Beauty/2.jpg"), // Dynamically import
  },
  {
    id: "10",
    title: "Tom Ford Private Blend DISCOVERY SET",
    rating: 3,
    price: 85,
    image: require("../../images/Beauty/3.jpg"),
  },
  {
    id: "11",
    title: "New York Biology Dead Sea Mud Mask for Face and Body - Spa Quality Pore Reducer for",
    rating: 4,
    price: 38,
    image: require("../../images/Beauty/4.jpg"),
  },
  {
    id: "12",
    title: "Viking Revolution Mens Facial Skin Care Kit - Includes Rejuvenating Face Moisturizer",
    rating: 5,
    price: 35.88,
    image: require("../../images/Beauty/5.jpg"),
  },
  {
    id: "13",
    title: "Premium Face Wash -2-in-1 Exfoliating Facial Wash and Foaming Face Cleanser for Men",
    rating: 4,
    price: 26.95,
    image: require("../../images/Beauty/6.jpg"),
  },
  {
    id: "14",
    title: "Every Man Jack Mens Amber + Sandalwood Body Set - Body Gift Set with Clean Ingredients",
    rating: 5,
    price: 32.99,
    image: require("../../images/Beauty/7.jpg"),
  },
  {
    id: "15",
    title: "Brickell Men's Products Daily Advanced Face Care Routine I, Gel Facial Cleanser Wash, Face",
    rating: 3,
    price: 77,
    image: require("../../images/Beauty/8.jpg"),
  },
];

const Beauty = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {products.map((product) => (
            <ProductDetail
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              image={product.image} // Passing dynamically imported image
            />
          ))}
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
