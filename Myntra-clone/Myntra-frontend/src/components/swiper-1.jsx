import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

export default function Swiper_1() {
   const imageState = useSelector((state) => state.imageSlice);
   const { firstSlider } = imageState[0];
 
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {firstSlider.map((ad, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img src={ad} alt="ad" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
