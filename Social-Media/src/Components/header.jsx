import { NavLink } from "react-router-dom";
import SearchBtn from "./searchBtn";
export default function Header() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-decoration-none">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary text-decoration-none"
                    : "nav-link px-2 text-white text-decoration-none"
                }
                name="home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="create-post"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary text-decoration-none"
                    : "nav-link px-2 text-white text-decoration-none"
                }
                name="new"
              >
                New
              </NavLink>
            </li>

            <li >
              <NavLink
                to="feature"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary text-decoration-none"
                    : "nav-link px-2 text-white text-decoration-none"
                }
              >
                Features
              </NavLink>
            </li>

            <li >
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link px-2 text-secondary text-decoration-none"
                    : "nav-link px-2 text-white text-decoration-none"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
            id="searchBar"
            name="searchBar"
          >
            <SearchBtn />
          </form>
        </div>
      </div>
    </header>
  );
}
