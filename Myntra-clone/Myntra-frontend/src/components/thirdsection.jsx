import { useSelector } from "react-redux";

export default function ThirdSection() {
    const imageState = useSelector((state) => state.imageSlice);
     const { part_3 } = imageState[0];
 
  return (
    <div>
      <h1 className="mt-30 font-bold  text-gray-700 pl-9 tracking-[.15em] uppercase text-3xl pb-8">
        Shop By Category
      </h1>
      <div className="pt-1 pl-10 pr-10 w-full grid grid-cols-6 gap-4 grid-rows-4">
        {part_3.map((item, idx) => {
          return <img key={idx} src={item} alt="heart_battle_ad" />;
        })}
      </div>
    </div>
  );
}
