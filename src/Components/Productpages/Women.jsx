import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg'

const Women = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="57"
            title={"ZAFUL Women's Tribal Ethnic Graphic Cropped Knitwear"}
            rating={5}
            price={29.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71UzN3SnA7S._AC_SX679_.jpg"
            }
          />
          <ProductDetail
            id="58"
            title={"Womens Casual Plaid Shacket Button Down Long Sleeve Shirt"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614VXl7BjqL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={36.99}
          />

          <ProductDetail
            id="59"
            title={
              "Lingerie for Women Lace Babydoll Sleepwear Boudoir Outfits Plus Size"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71P5C7LxUkL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={23.99}
          />
          <ProductDetail
            id="60"
            title={"Women's Crewneck Batwing Long Sleeve Sweaters 2023 Fall"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CvT1de7IL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
            price={44.99}
          />
          <ProductDetail
            id="61"
            title={
              "Women's Summer 2 Piece Outfits Casual Tracksuit Short Sleeve"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/613w-ZAPuZL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={32.99}
          />
          <ProductDetail
            id="62"
            title={
              "Women's Open Front Knit Cardigan Long Sleeve Lapel Casual Solid"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81TmhuoMY+L._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={49.99}
          />
          <ProductDetail
            id="63"
            title={"Leggings for Women, Black High Waisted Plus Size Maternity"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61HE+tlebbL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={3}
            price={13.99}
          />
          <ProductDetail
            id="64"
            title={
              "Vakkest Womens Camo Cargo Pants Army Fatigue Jogger Camouflage High Waist Trouser Clubwear Y2K Sweatpants with Belt"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61oJygZAnuL._AC_SY879_.jpg"
            }
            rating={2}
            price={34.99}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
