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
import Women from "../images/Women/1.jpg";
import Gaming from "../images/Gaming/out.jpg";
import Beauty from "../images/Beauty/1.jpg";
import Luxury from "../images/Luxury/Luxury.jpg";

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
            image={Women}
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
              "https://www.campmor.com/cdn/shop/files/gift-cards_54f2b68e-089f-46c2-9f86-fec7a89006af.jpg?v=1701721723"
            }
            link={<Link to="/Gifts">Unlock instant holiday magic</Link>}
          />
          <PageCard
            title={"Luxury"}
            image={
              Luxury
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
