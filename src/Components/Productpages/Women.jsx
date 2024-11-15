import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg';

// Array to store product data and image paths
const womenProducts = [
  {
    id: "57",
    title: "ZAFUL Women's Tribal Ethnic Graphic Cropped Knitwear",
    rating: 5,
    price: 29.99,
    image: require("../../images/Women/2.jpg"), // Dynamically imported
  },
  {
    id: "58",
    title: "Womens Casual Plaid Shacket Button Down Long Sleeve Shirt",
    rating: 5,
    price: 36.99,
    image: require("../../images/Women/3.jpg"),
  },
  {
    id: "59",
    title: "Lingerie for Women Lace Babydoll Sleepwear Boudoir Outfits Plus Size",
    rating: 4,
    price: 23.99,
    image: require("../../images/Women/4.jpg"),
  },
  {
    id: "60",
    title: "Women's Crewneck Batwing Long Sleeve Sweaters 2023 Fall",
    rating: 3,
    price: 44.99,
    image: require("../../images/Women/5.jpg"),
  },
  {
    id: "61",
    title: "Women's Summer 2 Piece Outfits Casual Tracksuit Short Sleeve",
    rating: 5,
    price: 32.99,
    image: require("../../images/Women/6.jpg"),
  },
  {
    id: "62",
    title: "Women's Open Front Knit Cardigan Long Sleeve Lapel Casual Solid",
    rating: 4,
    price: 49.99,
    image: require("../../images/Women/7.jpg"),
  },
  {
    id: "63",
    title: "Leggings for Women, Black High Waisted Plus Size Maternity",
    rating: 3,
    price: 13.99,
    image: require("../../images/Women/8.jpg"),
  },
  {
    id: "64",
    title: "Vakkest Womens Camo Cargo Pants Army Fatigue Jogger Camouflage High Waist Trouser Clubwear Y2K Sweatpants with Belt",
    rating: 2,
    price: 34.99,
    image: require("../../images/Women/9.jpg"),
  },
];

const Women = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {womenProducts.map((product) => (
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

export default Women;
