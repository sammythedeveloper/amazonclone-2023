import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";


const Luxury = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="33"
            title={
              "Pre-Loved Original GG Supreme Canvas Ophidia Cosmetic Case Medium, Brown"
            }
            rating={5}
            price={2150}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81HCdCS2yLL._AC_UL1000_FMwebp_QL65_.jpg"
            }
          />
          <ProductDetail
            id="34"
            title={"Dr Barbara Sturm, Darker Skin Tones Discovery Kit"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61pNajSd-8L._AC_UL1000_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={116.99}
          />

          <ProductDetail
            id="35"
            title={"Hand-Batik Cotton Andy Shirt"}
            image={
              "https://m.media-amazon.com/images/I/81pJQzcBTQL._AC_UL1000_QL65_.jpg"
            }
            rating={5}
            price={260}
          />
          <ProductDetail
            id="36"
            title={"Rolex Pre-Loved Stainless Steel"}
            image={
              "https://m.media-amazon.com/images/I/710NFPAZ7DL._AC_UL1000_QL65_.jpg"
            }
            rating={5}
            price={14950}
          />
          <ProductDetail
            id="37"
            title={"Crepe Short Dress"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ulmiRQPHL._MCnd_AC_UL1000_QL65_.jpg"
            }
            rating={5}
            price={2045}
          />
          <ProductDetail
            id="38"
            title={"Elderberry Bakuchiol Serum"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51+pn9K8QVL._AC_SX679_.jpg"
            }
            rating={5}
            price={80}
          />
          <ProductDetail
            id="39"
            title={"Samambaia High-Leg Choker Swimsuit"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81tRKVi5vZL._AC_SY879_.jpg"
            }
            rating={5}
            price={420}
          />
          <ProductDetail
            id="40"
            title={"Men Swim Trunks Starlette Bicolores"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vmYjZomVL._MCnd_AC_UL1000_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={310}
          />
        </div>
      </div>
    </div>
  );
};

export default Luxury;
