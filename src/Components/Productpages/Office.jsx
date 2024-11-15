import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg';

// Array to store product data
const officeProducts = [
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

const Office = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {/* Loop through the officeProducts array to render each product dynamically */}
          {officeProducts.map((product) => (
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

export default Office;
