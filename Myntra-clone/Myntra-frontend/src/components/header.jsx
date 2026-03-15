import { CgProfile } from "react-icons/cg";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinks = [
  { nav: "Men", path: "men" },
  { nav: "Women", path: "women" },
  { nav: "Kids", path: "kids" },
  { nav: "Home", path: "home" },
  { nav: "Beauty", path: "beauty" },
  { nav: "Genz", path: "genz" },
  { nav: "Studio", path: "studio" },
];
const iconItems = [
  { label: "Profile", icon: <CgProfile />, path: "profile" },
  { label: "Wishlist", icon: <IoIosHeartEmpty />, path: "wishlist" },
  { label: "Bag", icon: <BsHandbag />, path: "bag" },
];

export default function Header() {
  const bagItems  = useSelector((state) => state.bagSlice);  


  return (
    <header className="sticky top-0 z-40 border-b shadow-2xs border-white bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3  h-20.5 bg-white">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-[0.25rem] text-pink-600"
          >
            <img
              src="https://logosandtypes.com/wp-content/uploads/2021/01/Myntra.png"
              alt="myntra"
              className="size-20"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase text-gray-800 md:flex">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.nav}
                  to={item.path}
                  className="relative pb-2 transition hover:text-pink-600 font-bold"
                >
                  {item.nav}
                  {item.nav === "Studio" && (
                    <span className="absolute -right-8 -top-2 rounded-sm text-red-500 px-1 text-[10px] font-bold ">
                      New
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-6 md:flex-none">
          <div className="search-container bg-gray-100">
            <span className="text-gray-500">
              <IoIosSearch />
            </span>
            <input
              className="w-full bg-transparent outline-none placeholder:text-gray-400 "
              placeholder="Search for products, brands and more"
            />
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold uppercase text-gray-800">
            {iconItems.map((item) => {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex flex-col items-center gap-1 transition hover:text-pink-600 font-bold"
                >
                  <div className="text-lg">
                    {item.icon}
                    {item.label === "Bag" && (
                      <span className="absolute  right-3 top-4 rounded-sm text-red-500  text-[10px] font-extrabold ">
                        {bagItems.length}
                      </span>
                    )}
                  </div>
                  <span className="capitalize">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
