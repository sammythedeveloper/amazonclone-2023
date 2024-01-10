import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg'

const Clothing = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="17"
            title={
              "Ethiopian/Eritrean Traditional Habesha (kemis) Dress with Tilet"
            }
            rating={5}
            price={189.99}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/515dEXFRYUL._MCnd_AC_UL640_FMwebp_QL65_.jpg"
            }
          />
          <ProductDetail
            id="18"
            title={
              "Synthetic 4 Bundle Hair Extension for Traditional Eritrean Ethiopian Hair Braiding (Sanday Gorzo XL)"
            }
            image={
              "https://m.media-amazon.com/images/I/51lb0Y47h5L._AC_UL640_QL65_.jpg"
            }
            rating={4}
            price={37}
          />
          <ProductDetail
            id="19"
            title={"I'm just here for The Injera Habesha Ethiopian T-Shirt"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hO6LhmZ5L._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={16.99}
          />
          <ProductDetail
            id="20"
            title={"Authentic Ethiopian Hand-Embroidered Coffee Dress with"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/718-GxN1SQL._AC_SX679_.jpg"
            }
            rating={5}
            price={120.99}
          />

          <ProductDetail
            id="21"
            title={
              "Synthetic 4 Bundle Hair Extension for Traditional Eritrean Ethiopian Hair Braiding (Sanday XL)"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51z1K6GuAGL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={37.5}
          />

          <ProductDetail
            id="22"
            title={"Ethiopian dress clothes habesha T-shirt"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61ZaB3oHCXS._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={16.99}
          />
          <ProductDetail
            id="23"
            title={
              "Ethiopian Flag Colors on Grunge Sketchy Lion Head Black Backdrop, Wall Hanging for Bedroom Living"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fQ-WEWakL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={24.95}
          />
          <ProductDetail
            id="24"
            title={
              "Ethiopian Cross Jewelry Sets Gold Color Wedding Party Sets for Ethiopian & Eritrean Women"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nKChwpgIL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={4}
            price={17.99}
          />

          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner }  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
