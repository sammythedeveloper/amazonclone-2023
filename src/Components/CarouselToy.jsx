import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselToy = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers in Toys & Games</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
          >
              {
                  Array.from({ length: 9 }, (_, i) =>
                      <SwiperSlide key={i}>
                          <img src={require(`../images/toy_${i}.jpg`)}/>
                      </SwiperSlide>
                  )
              }
              </Swiper>
      </div>
  );
};

export default CarouselToy;