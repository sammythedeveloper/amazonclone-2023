import React from "react";
import { Carousel } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg'

const Office = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="41"
            title={
              "FLEXISPOT 35in Standing Desk Converter Height Adjustable Sit"
            }
            rating={5}
            price={129}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Kc0S5FLaL._AC_UL640_FMwebp_QL65_.jpg"
            }
          />
          <ProductDetail
            id="42"
            title={
              "EUREKA ERGONOMIC Height Adjustable Computer Tower Stand"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Rw4nqxN3L._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={16.99}
          />

          <ProductDetail
            id="43"
            title={
              "Ivoler Laptop Stand, Laptop Holder Riser Computer Tablet Stand"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716-WQb6RXL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
            price={38}
          />
          <ProductDetail
            id="44"
            title={"Dealusy 4 Set Glass Cups with Lids and Straws 16 oz"}
            image={
              "https://m.media-amazon.com/images/I/61EDc3KA6gL._AC_UL640_QL65_.jpg"
            }
            rating={5}
            price={159.99}
          />
          <ProductDetail
            id="45"
            title={
              "ErGear Electric Standing Desk Adjustable Height, 48 x 24 Inches Desktop with Hidden AC&DC Outlet"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hPOVdJnnL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={199.99}
          />
          <ProductDetail
            id="46"
            title={
              "Hopipad Topographic Large Gaming Mouse Pad for Desk, Desk Mat with Seamed Edges, Waterproof Desk Pad"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71508GDoLUL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
            price={12.99}
          />
          <ProductDetail
            id="47"
            title={
              "Bestier Gaming Floating Shelves, 34 inch LED Wall Mounted Shelf"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81hC3W6jCVL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={129.99}
          />
          <ProductDetail
            id="48"
            title={
              "PatioMage Ergonomic Gaming Chair with Footrest Big and Tall Game Chair Reclining Gamer Chair "
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71oFkJPR36L._AC_SX679_.jpg"
            }
            rating={5}
            price={223.99}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
