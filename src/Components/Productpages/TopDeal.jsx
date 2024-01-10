import React from "react";
import { Carousel } from "../";
import ProductDetail from "../ProductDetail";
import banner from '../../images/banner_image_2.jpg'

const TopDeal = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[2000px] m-auto">
        <Carousel />

        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <ProductDetail
            id="49"
            title={"Women's Ecosmart V-notch Crewneck Sweatshirt, Fleece"}
            rating={3}
            price={10}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716DeQPeSPL._AC_UL640_FMwebp_QL65_.jpg"
            }
          />
          <ProductDetail
            id="50"
            title={
              "Blink Mini – Compact indoor plug-in smart security camera, 1080p HD"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31v0kAjYv5S._AC_SR400,600_.jpg"
            }
            rating={5}
            price={16.99}
          />

          <ProductDetail
            id="51"
            title={
              "Legendary Whitetails Men's Buck Camp Flannel, Long Sleeve Plaid Button Down Casual Shirt, Corduroy"
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/917xzOZDnPL._AC_UL675_SR675,480_.jpg"
            }
            rating={4}
            price={38}
          />
          <ProductDetail
            id="52"
            title={"Amazon Basics 6-Piece Fade Resistant Bath towel, "}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91U-wsQEn7L._AC_SY879_.jpg"
            }
            rating={4}
            price={23.57}
          />
          <ProductDetail
            id="53"
            title={
              "Hushee 4 Pieces Plastic Storage Bins with Lid Stackable Storage Containers"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WyOwXW22L._AC_SX679_.jpg"
            }
            rating={3}
            price={42.99}
          />
          <ProductDetail
            id="54"
            title={"Unisex Toddlers and Babies' Pant"}
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/912wmfqjOwL._AC_SY879_.jpg"
            }
            rating={3}
            price={15.99}
          />
          <ProductDetail
            id="55"
            title={
              "SONGMICS 12-Slot Watch Box, Christmas Gifts, Lockable Watch"
            }
            image={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81jVpDpyhfL._AC_UL640_FMwebp_QL65_.jpg"
            }
            rating={5}
            price={54.99}
          />
          <ProductDetail
            id="56"
            title={
              "PULIDIKI Car Cleaning Gel Universal Detailing Kit Automotive Dust Car Crevice Cleaner "
            }
            image={
              "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71YLxhnPUxL._AC_UL900_SR900,600_.jpg"
            }
            rating={5}
            price={7.99}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner }  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeal;
