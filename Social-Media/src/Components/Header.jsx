import { useRef } from "react";
import {  Link } from "react-router-dom";

export default function Header() {
  
  const anchorHome = useRef(null);
  const anchorCreatePost = useRef(null);

  function openCreatePost() {
    anchorCreatePost.current.className = "nav-link px-2 text-secondary";
    anchorHome.current.className = "nav-link px-2 text-white";
  }

  function openHome() {
    anchorHome.current.className = "nav-link px-2 text-secondary";
    anchorCreatePost.current.className = "nav-link px-2 text-white";
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className="nav-link px-2 text-secondary"
                onClick={openHome}
                ref={anchorHome}
                name="home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="create-post"
                className="nav-link px-2 text-white"
                onClick={openCreatePost}
                ref={anchorCreatePost}
                name="new"
              >
                New
              </Link>
            </li>

            <li>
              <Link to="/features" className="nav-link px-2 text-white">
                Features
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
            id="searchBar"
            name="searchBar"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark searchSize"
              placeholder="Search..."
              aria-label="Search"
              id="searchhpanel"
              name="searchpanel"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
