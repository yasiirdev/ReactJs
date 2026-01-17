import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function SearchBtn() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="d-flex align-items-center gap-2 searchBtn">
      {isSearchOpen ? (
        <div className="search-container d-flex align-items-center ">
          <input
            type="search"
            className="form-control form-control-sm me-2"
            placeholder="Search..."
            autoFocus
          />
          <button
            className="btn btn-link btn-sm  p-0 bg-danger text-white pointer-event text-decoration-none"
            onClick={() => setIsSearchOpen(false)}
          >
            <IoMdClose />
          </button>
        </div>
      ) : (
        <>
          <button
            className="btn btn-link btn-sm bg-primary text-white pointer-event text-decoration-none"
            onClick={() => setIsSearchOpen(true)}
          >
            <FaSearch />
          </button>
        </>
      )}
    </div>
  );
}
