import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import burger_menu from "@/assets/svgs/burger_menu.svg";
import { navMenuItems } from "@/assets/data/menuData/menuData";
import "./Navbar.css";

const Navbar = ({ isBurgerOpen, onToggleBurger, onLinkClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    onLinkClick?.();

    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        // On a different page — navigate to home with hash
        // Layout.jsx will handle scrolling to the section
        navigate("/" + path);
      } else {
        // Already on home — scroll directly
        const el = document.querySelector(path);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(path);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Mobile burger toggle */}
      <button
        type="button"
        className="navbar-toggle"
        onClick={onToggleBurger}
        aria-label={
          isBurgerOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isBurgerOpen}
      >
        <img src={burger_menu} alt="" />
      </button>

      {/* Nav links */}
      <ul className={`nav-menu ${isBurgerOpen ? "show" : ""}`} role="list">
        {navMenuItems.map(({ name, path, label }) => (
          <li key={name}>
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNavLinkClick(path)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
