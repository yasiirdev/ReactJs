export default function Product({product}) {
  
  const discount = product.discount_percentage || 20;
  const rating = product.rating.stars || 4.5;
  const originalPrice = product.original_price || Math.round(product.current_price / (1 - discount / 100));

  const Handlerbag = () => {
    console.log("send to bag");
  }
  
  
  return (
    <div className="group relative overflow-hidden  bg-white  hover:shadow-xl transition-all duration-300 ease-in-out">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-70 w-full">
        <img
          src={product.image}
          alt={product.item_name}
          className="w-full h-full object-fill"
        />

        {/* rating Badge */}
        <div className="absolute bottom-3 left-3 bg-white/70 inline-flex text-black px-3 py-1 rounded-sm text-xs font-bold">
          {rating}
          <svg
            className="w-4 h-4 text-blue-500 ml-sm "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="pr-1 pl-1">|</span> {product.rating.count || 0}
        </div>
        {/* Wishlist Button */}
        <center className="absolute bottom-0 w-full h-10 bg-white p-2  shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100 duration-300  ">
          <button className="w-43 h-8  hover:border   outline-none flex justify-center items-center" onClick={Handlerbag}>
            Add to bag
          </button>
        </center>
      </div>

      {/* Content Container */}
      <div className="p-2">
        {/* Brand */}
        <p className="text-[1.1rem] text-gray-900 uppercase font-bold tracking-wide">
          {product.company || "Brand"}
        </p>

        {/* Product Name */}
        <h3 className="text-xs font-medium text-gray-900 line-clamp-2 hover:text-gray-700 transition-colors">
          {product.item_name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{Math.round(product.current_price)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ₹{originalPrice}
          </span>
          {product.discount_percentage && (
            <span className="text-red-500 text-sm ">
              ({product.discount_percentage}% Off)
            </span>
          )}
        </div>

        <h3 className="text-sm font-medium  line-clamp-2  capitalize text-red-500">
          {product.rating.count <= 50 && "only few left!"}
        </h3>
      </div>
    </div>
  );
}
