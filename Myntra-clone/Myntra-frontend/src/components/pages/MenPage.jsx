import Loader from "../loader";
import Product from "../product";
import { useSelector } from "react-redux";

export default function Men_page() {
  const { items, fetching } = useSelector((state) => state.apiSlice);
  const product = items[0];

  

  return (
    <>
      {!fetching ? (
        <Loader />
      ) : (
        <div className="w-full h-auto bg-green-800 inline-flex">
          <div className="h-auto w-[20%] bg-indigo-950"></div>
          <div className="p-2 w-[80%] bg-white grid grid-cols-4 gap-8 ">
            {product.map((items) => (
              <Product key={items.id} product={items} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
