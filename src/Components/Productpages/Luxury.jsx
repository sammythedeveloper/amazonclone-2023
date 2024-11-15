import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";

// Array to store product data
const luxuryProducts = [
  {
    id: "33",
    title: "Pre-Loved Original GG Supreme Canvas Ophidia Cosmetic Case Medium, Brown",
    rating: 5,
    price: 2150,
    image: require("../../images/Luxury/1.jpg"), // Updated path for image
  },
  {
    id: "34",
    title: "Dr Barbara Sturm, Darker Skin Tones Discovery Kit",
    rating: 5,
    price: 116.99,
    image: require("../../images/Luxury/2.jpg"), // Updated path for image
  },
  {
    id: "35",
    title: "Hand-Batik Cotton Andy Shirt",
    rating: 5,
    price: 260,
    image: require("../../images/Luxury/3.jpg"), // Updated path for image
  },
  {
    id: "36",
    title: "Rolex Pre-Loved Stainless Steel",
    rating: 5,
    price: 14950,
    image: require("../../images/Luxury/4.jpg"), // Updated path for image
  },
  {
    id: "37",
    title: "Crepe Short Dress",
    rating: 5,
    price: 2045,
    image: require("../../images/Luxury/5.jpg"), // Updated path for image
  },
  {
    id: "38",
    title: "Elderberry Bakuchiol Serum",
    rating: 5,
    price: 80,
    image: require("../../images/Luxury/6.jpg"), // Updated path for image
  },
  {
    id: "39",
    title: "Samambaia High-Leg Choker Swimsuit",
    rating: 5,
    price: 420,
    image: require("../../images/Luxury/7.jpg"), // Updated path for image
  },
  {
    id: "40",
    title: "Men Swim Trunks Starlette Bicolores",
    rating: 5,
    price: 310,
    image: require("../../images/Luxury/8.jpg"), // Updated path for image
  },
];

const Luxury = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {/* Loop through the luxuryProducts array to render each product dynamically */}
          {luxuryProducts.map((product) => (
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

export default Luxury;
