import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg';

// Array to store product data
const topDealProducts = [
  {
    id: "49",
    title: "Women's Ecosmart V-notch Crewneck Sweatshirt, Fleece",
    rating: 3,
    price: 10,
    image: require("../../images/TopDeal/1.jpg"), // Updated path for image
  },
  {
    id: "50",
    title: "Blink Mini – Compact indoor plug-in smart security camera, 1080p HD",
    rating: 5,
    price: 16.99,
    image: require("../../images/TopDeal/2.jpg"), // Updated path for image
  },
  {
    id: "51",
    title: "Legendary Whitetails Men's Buck Camp Flannel, Long Sleeve Plaid Button Down Casual Shirt, Corduroy",
    rating: 4,
    price: 38,
    image: require("../../images/TopDeal/3.jpg"), // Updated path for image
  },
  {
    id: "52",
    title: "Amazon Basics 6-Piece Fade Resistant Bath towel",
    rating: 4,
    price: 23.57,
    image: require("../../images/TopDeal/4.jpg"), // Updated path for image
  },
  {
    id: "53",
    title: "Hushee 4 Pieces Plastic Storage Bins with Lid Stackable Storage Containers",
    rating: 3,
    price: 42.99,
    image: require("../../images/TopDeal/5.jpg"), // Updated path for image
  },
  {
    id: "54",
    title: "Unisex Toddlers and Babies' Pant",
    rating: 3,
    price: 15.99,
    image: require("../../images/TopDeal/6.jpg"), // Updated path for image
  },
  {
    id: "55",
    title: "SONGMICS 12-Slot Watch Box, Christmas Gifts, Lockable Watch",
    rating: 5,
    price: 54.99,
    image: require("../../images/TopDeal/7.jpg"), // Updated path for image
  },
  {
    id: "56",
    title: "PULIDIKI Car Cleaning Gel Universal Detailing Kit Automotive Dust Car Crevice Cleaner",
    rating: 5,
    price: 7.99,
    image: require("../../images/TopDeal/8.jpg"), // Updated path for image
  },
];

const TopDeal = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {/* Loop through the topDealProducts array to render each product dynamically */}
          {topDealProducts.map((product) => (
            <ProductDetail
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              image={product.image} // Passing dynamically imported image
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeal;
