import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselTrending = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Trending deals</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
          >
              {
                  Array.from({ length: 9 }, (_, i) =>
                      <SwiperSlide key={i}>
                          <img src={require(`../images/T_${i}.jpg`)}/>
                      </SwiperSlide>
                  )
              }
              </Swiper>
      </div>
  );
};

export default CarouselTrending;