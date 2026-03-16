import { useSelector } from "react-redux";
import Product from "../product";

export default function Bag_page() {
  const bagItems = useSelector((state) => state.bagSlice);
  const { items } = useSelector((state) => state.apiSlice);

  if (items.length > 0) {
    const finalItems = items[0].filter((item) => {
      return bagItems.indexOf(item.id) >= 0;
    });

    const HandleOrder = () => {
      window.alert("Your order is place successfuly");
    };

    let items_sum = 0;
      finalItems.forEach(items => {
        items_sum += items.current_price;
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
            <div className="w-[20%] bg-blue-400 h-auto p-2 ">
              <div className="w-full bg-black h-50 rounded-xl border-3 border-solid border-gray-200 text-white p-3">
                <b className="capitalize m-4">
                  number of items : {bagItems.length}{" "}
                </b>
                <b className="capitalize m-4">discount rate : ?</b>
                <b className="capitalize m-4">total price : ₹{items_sum}</b>
              </div>
              <button
                className="w-43 h-8 border outline-none m-auto mt-4 flex justify-center items-center"
                onClick={HandleOrder}
              >
                ORDER
              </button>
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
