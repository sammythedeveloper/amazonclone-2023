import React from "react";
import { Carousel, Category, CarouselBooks } from "../";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail";
import banner from "../../images/banner_image_2.jpg";

const Gift = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="25"
            title={"Amazon.com eGift Card"}
            rating={5}
            price={50}
            image={
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545180_sd.jpg;maxHeight=640;maxWidth=550"
            }
          />
          <ProductDetail
            id="26"
            title={"Uber eGift Card"}
            image={
              "https://i5.walmartimages.com/seo/Uber-25-Gift-Card-eGift-Card_dbe57b2a-8107-4792-aa8b-d8211d33d01b.ff469d7d001c69a53c33fedbffcef177.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            }
            rating={5}
            price={50}
          />

          <ProductDetail
            id="27"
            title={"InstaCart eGift Card"}
            image={
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441569_sd.jpg;maxHeight=640;maxWidth=550"
            }
            rating={5}
            price={120}
          />

          <ProductDetail
            id="28"
            title={"Apple eGift card"}
            image={
              "https://i5.walmartimages.com/seo/25-Apple-Gift-Card-Email-Delivery_15a9fd5e-cc96-40ca-a406-4db1137a3f19.659a5f3f71394315451abc9206a025ef.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            }
            rating={4}
            price={150}
          />
          <ProductDetail
            id="29"
            title={"Airbnb eGift Card "}
            image={
              "https://i5.walmartimages.com/seo/Airbnb-25-eGift-Card_0cd0575a-4d77-4b99-aa9b-cc9640df7f1c.dc02b7a05df812f43eb517d9e3fa60b3.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            }
            rating={4}
            price={40}
          />

          <ProductDetail
            id="30"
            title={"BlackCard Gift card"}
            image={
              "https://basilandblush.com/cdn/shop/products/mfhd_1_30f47de3-8b73-4864-883c-e4fe5b9c4549.png?v=1598291354"
            }
            rating={3}
            price={200}
          />
          <ProductDetail
            id="31"
            title={"Doordash eGift Card"}
            image={
              "https://i5.walmartimages.com/seo/DoorDash-25-eGift-Card_d6dc8ce7-2b1c-43c3-a7e7-7b7535cf3233.a43b25497d0c64a5fcee37bd03c1ee65.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            }
            rating={2}
            price={70}
          />
          <ProductDetail
            id="32"
            title={"Google playstore eGift Card"}
            image={
              "https://i5.walmartimages.com/seo/Google-Play-50-Email-Delivery-Limit-2-codes-per-order_b6342847-f3b2-4907-9371-a07a683834c6.e53c420d269063e2ffccaaf456a43a35.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            }
            rating={5}
            price={69.99}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
