import { useSelector } from "react-redux";
import Product from "../product";

export default function Bag_page() {
  const bagItems = useSelector((state) => state.bagSlice);
  const { items } = useSelector((state) => state.apiSlice);

  if (items.length > 0) {
    const finalItems = items[0].filter((item) => {
      return bagItems.indexOf(item.id) >= 0;
    });

    return (
      <>
        {bagItems.length > 0 ? (
          <div className="w-full h-auto bg-white flex">
            <div className="p-2 w-[80%] bg-white grid grid-cols-4 gap-8 ">
              {finalItems.map((items, idx) => (
                <Product key={idx} product={items} />
              ))}
            </div>
            <div className="w-[20%] bg-blue-400 h-screen">
              <div></div>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex justify-center items-center">
            <img
              className=" size-lvh"
              src="/emptyshopping.avif"
              alt="myntra bag"
            />
          </div>
        )}
      </>
    );
  }
}
