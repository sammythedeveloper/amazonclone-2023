import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"https://m.media-amazon.com/images/I/71Xm716d+GL.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"https://m.media-amazon.com/images/I/61W9hWEIlZL.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={"https://m.media-amazon.com/images/I/71XNpZbNWNL._SX3000_.jpg"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={"https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/G/01/kindle/journeys/Tu65ukzMHfEtEhLD/NWY2OWMyZWYt._CB541342527_.jpg"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/I/71khM5lFy4L._SX3000_.jpg"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"https://m.media-amazon.com/images/I/71KRo-Md-FL.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
