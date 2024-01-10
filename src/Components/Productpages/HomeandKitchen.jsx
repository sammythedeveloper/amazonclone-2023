import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import ProductDetail from "../ProductDetail";
import CarouselTrending from "../CarouselTrending";
import banner from '../../images/banner_image_2.jpg'

const HomeandKitchen = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="1"
            title={
              "Melitta Aroma Tocco PLUS with both Iced Coffee and Hot Drip Coffee"
            }
            rating={4}
            price={129}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rdQ+dzm4L._AC_SX679_.jpg"
            }
          />
          <ProductDetail
            id="2"
            title={"24-Piece Black Silverware Set with Steak Knives"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vZ7TGZW1L._AC_SX679_.jpg"
            }
            rating={5}
            price={16.99}
          />

          <ProductDetail
            id="3"
            title={
              "JoyJolt JoyFul 24pc(12 Airtight, Freezer Safe Food Storage Containers)"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/917BTSQCT6L._AC_SX679_.jpg"
            }
            rating={5}
            price={38}
          />
          <ProductDetail
            id="4"
            title={"Dealusy 4 Set Glass Cups with Lids and Straws 16 oz"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719q3kfsQAL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={16.99}
          />
          <ProductDetail
            id="5"
            title={"NutriChef Non-Stick Kitchen Oven Baking Pans-Deluxe "}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+8ct7NbAL._AC_SX679_.jpg"
            }
            rating={3}
            price={19}
          />
          <ProductDetail
            id="6"
            title={"PRAKI Airtight Food Storage Container Set"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91VyrAJPgkL._AC_SX679_PIbundle-16,TopRight,0,0_SH20_.jpg"
            }
            rating={4}
            price={24}
          />
          <ProductDetail
            id="7"
            title={
              "StepRite Kitchen Mats, 2PCS Kitchen Rugs, Cushioned Anti Fatigue Kitchen Mats for Floor"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81NRhd43iAL._AC_SX679_.jpg"
            }
            rating={5}
            price={24.99}
          />
          <ProductDetail
            id="8"
            title={"PHILIPS 3200 Series Fully Automatic Espresso Machine"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71pfwf847pL._AC_SX679_.jpg"
            }
            rating={4}
            price={79}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner } />
          </div>
        </div>
        <CarouselTrending />
      </div>
    </div>
  );
};

export default HomeandKitchen;
