import ThirdSection from "./thirdsection";
import Swiper_1 from "./swiper-1";
import Swiper_2 from "./swiper-2";
import Swiper_3 from "./swiper-3";
import {  useSelector } from "react-redux";
import Loader from "./loader";

function Home() {
  const { fetching } = useSelector((state) => state.apiSlice);

  return (
    <>
      {!fetching ? (
        <Loader />
      ) : (
        <div className="w-full h-auto bg-white  asssitent-font ">
          <div className="w-full h-[40%] flex items-center justify-center">
            <img
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JANUARY/21/xF4qJrwz_12d27863827c4af9b3281147f4ca1a6b.jpg"
              alt="sell-ad"
            />
          </div>
          <Swiper_1 />
          <div className="w-full">
            <h1 className="mt-30 font-bold  text-gray-700 pl-9 tracking-[.15em] uppercase text-3xl pb-8">
              RISING STARS
            </h1>
            <Swiper_2 />
            <h1 className="mt-30 font-bold  text-gray-700 pl-9 tracking-[.15em] uppercase text-3xl pb-8">
              LUXE GRAND REDUCTION DEALS
            </h1>
            <Swiper_3 />
            <ThirdSection /> 
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
