import React from "react";
import {
  Carousel,
  PageCard,
  Category,
  CarouselBooks,
  CarouselTrending,
  CarouselToy,
} from "./";
import { Link } from "react-router-dom";
import banner from '../images/banner_image_2.jpg'

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
          <PageCard
            title={"Home and Kitchen"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91IKjopR2XL._AC_SX679_.jpg"
            }
            link={<Link to="/HomeandKitchen">Shop the Winter Sale</Link>}
          />
          <PageCard
            title={"Top Deal"}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/77/jkhvkjvbfdnb/softlines-bvskjdshkkd/stores-oxmvjdymqzl/VBQ_-_CRUISE_24_-_LIFESTYLE_-_POINT_OF_SALES_-_5-cropped.jpg"
            }
            link={<Link to="/TopDeal">See all deals</Link>}
          />
          <PageCard
            title={"Gaming"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71E-+dRC+1L._AC_SX679_.jpg"
            }
            link={<Link to="/Office">See all deals</Link>}
          />
          <PageCard
            title={"Ethiopian Lion of Judah T-shirt"}
            image={
              "https://m.media-amazon.com/images/I/51RWukPbn9L._AC_SX679_.jpg"
            }
            link={<Link to="/Clothing">See all deals</Link>}
          />
          <PageCard
            title={"New years dresses under $50"}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/DEC/CC/desktop/CategoryCard_d_2x_HolidayFlip23_Womens_Dec._SY608_CB574574264_.jpg"
            }
            link={<Link to="/Women">Shop now</Link>}
          />
          <PageCard
            title={"Beauty"}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2023/BRANDED_ACTIVATIONS/ZETA/Street/homepage/DBS-796-Cruise-US-Tier1-Fashion-Support-Homepage-SingleImage-Card-758x608._SY608_CB572212528_.jpg"
            }
            link={<Link to="/Beauty">See more pre-loved from Shopbop</Link>}
          />
          <PageCard
            title={"Send a holiday eGift Card"}
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/GiftCards/2023/Q4/VX-2360_US_Holiday_LastMinGifting/VX-2360-US_Holiday_LastMinGifting_GW_CC_758X608._SY608_CB574056724_.jpg"
            }
            link={<Link to="/Gifts">Unlock instant holiday magic</Link>}
          />
          <PageCard
            title={"Luxury"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91+z6fJ6x7L._AC_UL1000_FMwebp_QL65_.jpg"
            }
            link={<Link to="/Luxury">Shop more products</Link>}
          />

          <div className="m-3 pt-8">
            <img className="xl:hidden" src={ banner}/>
          </div>
        </div>
        <CarouselBooks />
        <Category />
        <CarouselTrending />
        <CarouselToy />
      </div>
    </div>
  );
};

export default HomePage;
