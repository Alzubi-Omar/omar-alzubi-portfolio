import React, { useState } from "react";
import { Link } from "react-router-dom";

import connect_with from "@/assets/svgs/connect_with.svg";
import { socialLinks } from "@/assets/data/menuData/menuData";

import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const isAnyMenuOpen = isSocialsOpen || isBurgerOpen;

  const closeAll = () => {
    setIsSocialsOpen(false);
    setIsBurgerOpen(false);
  };

  const toggleSocials = () => {
    setIsSocialsOpen((prev) => !prev);
    setIsBurgerOpen(false);
  };

  const toggleBurger = () => {
    setIsBurgerOpen((prev) => !prev);
    setIsSocialsOpen(false);
  };

  return (
    <header className="header-container">
      {/* Backdrop */}
      <div
        className={`header-overlay ${isAnyMenuOpen ? "show" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      {/* Name */}
      <div className="header-brand">
        <Link to="/" className="brand-link" aria-label="Go to homepage">
          Omar AlzuBi
        </Link>
      </div>

      {/* Logo + socials */}
      <div className="header-meta">
        <Logo />

        <div className="socials-desktop">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Mobile: toggle button */}
        <button
          type="button"
          className="socials-toggle"
          onClick={toggleSocials}
          aria-label={
            isSocialsOpen ? "Close social links" : "Open social links"
          }
          aria-expanded={isSocialsOpen}
        >
          <img src={connect_with} alt="" />
        </button>

        {/* Mobile: socials drawer */}
        <div className={`socials-drawer ${isSocialsOpen ? "show" : ""}`}>
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-link"
              onClick={closeAll}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <Navbar
        isBurgerOpen={isBurgerOpen}
        onToggleBurger={toggleBurger}
        onLinkClick={closeAll}
      />
    </header>
  );
};

export default Header;
