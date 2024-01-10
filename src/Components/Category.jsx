import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Category = () => {
  return (
    <div className="bg-white m-3 ">
      <div className="text-2xl front-semibold p-3">Best Sellers in Home & Kitchen</div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41dCprAmf0L._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+8uTMDRFL._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81coIlkp7rL._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nhPE7vxHL._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nY9nYn30L._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/611owqbxXmL._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81CGKCHLbML._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51lFr88wxML._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RekxT+qML._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71DM1XJzm+L._AC_SY400_.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
