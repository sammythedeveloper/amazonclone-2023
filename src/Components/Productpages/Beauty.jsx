import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg'

const Beauty = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="9"
            title={
              "Perfume Gift Set includes YSL Perfume for Men, La Nuit De Lhomme EDP Spray For Men"
            }
            rating={5}
            price={129}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gQFZ7R93L._AC_UL640_FMwebp_QL65_.jpg"
            }
          />
          <ProductDetail
            id="10"
            title={"Tom Ford Private Blend DISCOVERY SET"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51HpOXm0ytL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
            price={85}
          />

          <ProductDetail
            id="11"
            title={
              "New York Biology Dead Sea Mud Mask for Face and Body - Spa Quality Pore Reducer for"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7123oCekjoL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={38}
          />
          <ProductDetail
            id="12"
            title={
              "Viking Revolution Mens Facial Skin Care Kit - Includes Rejuvenating Face Moisturizer"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71glRV+F9JL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={35.88}
          />
          <ProductDetail
            id="13"
            title={
              "Premium Face Wash -2-in-1 Exfoliating Facial Wash and Foaming Face Cleanser for Men"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71vyEpfxVuL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={26.95}
          />
          <ProductDetail
            id="14"
            title={
              "Every Man Jack Mens Amber + Sandalwood Body Set - Body Gift Set with Clean Ingredients"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71svb8AX7jL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={32.99}
          />
          <ProductDetail
            id="15"
            title={
              "Brickell Men's Products Daily Advanced Face Care Routine I, Gel Facial Cleanser Wash, Face"
            }
            image={
              "https://m.media-amazon.com/images/I/71IeHCz3hOL._AC_UL640_QL65_.jpg"
            }
            rating={3}
            price={77}
          />
          <ProductDetail
            id="16"
            title={
              "Ufree Professional Hair Clippers for Men, 3 in 1 Mens Beard Trimmer, Cordless Clippers and"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+Mr0ZfZUL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={69.99}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner }  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
