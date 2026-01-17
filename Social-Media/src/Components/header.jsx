import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchBtn from "./searchBtn";
import {
  FaBars,
  FaTimes,
  FaPalette,
  FaHome,
  FaPen,
  FaStar,
  FaUser,
} from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Create Post", path: "/create-post", icon: <FaPen /> },
    { name: "Features", path: "/feature", icon: <FaStar /> },
    { name: "About", path: "/about", icon: <FaUser /> },
  ];

  return (
    <header
      className="sticky-top shadow-sm"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
          <NavLink
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            style={{ fontSize: "1.5rem" }}
          >
            <div
              className="rounded-circle bg-warning d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
              }}
            >
              <FaPalette size={20} className="text-dark" />
            </div>
            <span>Amazingstories</span>
          </NavLink>
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              boxShadow: "none",
            }}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto gap-2">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link fw-bold d-flex align-items-center gap-2 text-warning"
                        : "nav-link d-flex align-items-center gap-2 text-white"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search Form */}
            <form
              className="d-flex ms-lg-3 mt-3 mt-lg-0"
              role="search"
              id="searchBar"
              name="searchBar"
            >
              <SearchBtn />
            </form>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="position-fixed w-100"
          style={{
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
