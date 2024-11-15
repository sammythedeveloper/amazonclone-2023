import React from "react";
import { Carousel, CarouselTrending } from "../";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg';

// Array to store product data
const homeAndKitchenProducts = [
  {
    id: "1",
    title: "Melitta Aroma Tocco PLUS with both Iced Coffee and Hot Drip Coffee",
    rating: 4,
    price: 129,
    image: require("../../images/Home&Kitchen/13.jpg"), // Updated path for image
  },
  {
    id: "2",
    title: "24-Piece Black Silverware Set with Steak Knives",
    rating: 5,
    price: 16.99,
    image: require("../../images/Home&Kitchen/14.jpg"), // Updated path for image
  },
  {
    id: "3",
    title: "JoyJolt JoyFul 24pc(12 Airtight, Freezer Safe Food Storage Containers)",
    rating: 5,
    price: 38,
    image: require("../../images/Home&Kitchen/15.jpg"), // Updated path for image
  },
  {
    id: "4",
    title: "Dealusy 4 Set Glass Cups with Lids and Straws 16 oz",
    rating: 5,
    price: 16.99,
    image: require("../../images/Home&Kitchen/16.jpg"), // Updated path for image
  },
  {
    id: "5",
    title: "NutriChef Non-Stick Kitchen Oven Baking Pans-Deluxe",
    rating: 3,
    price: 19,
    image: require("../../images/Home&Kitchen/17.jpg"), // Updated path for image
  },
  {
    id: "6",
    title: "PRAKI Airtight Food Storage Container Set",
    rating: 4,
    price: 24,
    image: require("../../images/Home&Kitchen/18.jpg"), // Updated path for image
  },
  {
    id: "7",
    title: "StepRite Kitchen Mats, 2PCS Kitchen Rugs, Cushioned Anti Fatigue Kitchen Mats for Floor",
    rating: 5,
    price: 24.99,
    image: require("../../images/Home&Kitchen/19.jpg"), // Updated path for image
  },
  {
    id: "8",
    title: "PHILIPS 3200 Series Fully Automatic Espresso Machine",
    rating: 4,
    price: 79,
    image: require("../../images/Home&Kitchen/20.jpg"), // Updated path for image
  },
];

const HomeAndKitchen = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {/* Loop through the homeAndKitchenProducts array to render each product dynamically */}
          {homeAndKitchenProducts.map((product) => (
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
        <div className="m-3 pt-8">
          <img className="xl:hidden" src={banner} />
        </div>

        <CarouselTrending />
      </div>
    </div>
  );
};

export default HomeAndKitchen;
