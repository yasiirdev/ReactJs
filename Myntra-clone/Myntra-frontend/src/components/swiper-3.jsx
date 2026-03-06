import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const block = [1, 2, 3, 4];

export default function Swiper_3() {
   const imageState = useSelector((state) => state.imageSlice);
   const { thirdSlider } = imageState[0];
 

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={0}
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
      {block.map((bl) => (
        <SwiperSlide key={bl}>
          <div className=" w-full grid grid-cols-5">
            <div className="flex items-center justify-center ">
              {thirdSlider.map((src, idx) => {
                return (
                  <img
                    key={idx}
                    src={src}
                    alt="add"
                    className="w-full object-cover "
                  />
                );
              })}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
