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
import banner from "../images/banner_image_2.jpg";
import kitchen from "../images/Home&Kitchen/7.jpg";
import top from "../images/Best-seller/3.jpg";
import women from "../images/women/1.jpg";
import Gaming from "../images/Gaming/1.jpg";
import Beauty from "../images/Beauty/1.jpg";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
          <PageCard
            title={"Home and Kitchen"}
            image={kitchen}
            link={<Link to="/HomeandKitchen">Shop the Winter Sale</Link>}
          />
          <PageCard
            title={"Top Deal"}
            image={top}
            link={<Link to="/TopDeal">See all deals</Link>}
          />
          <PageCard
            title={"Gaming"}
            image={Gaming}
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
            image={women}
            link={<Link to="/Women">Shop now</Link>}
          />
          <PageCard
            title={"Beauty"}
            image={Beauty}
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
            <img className="xl:hidden" src={banner} />
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
