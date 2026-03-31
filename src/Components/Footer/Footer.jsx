import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navMenuItems, socialLinks } from "@/assets/data/menuData/menuData";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = (path) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + path);
      } else {
        const el = document.querySelector(path);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    navigate(path);
  };

  return (
    <footer className="footer">
      <button
        className="footer__scroll-top"
        onClick={handleScrollTop}
        aria-label="Back to top"
      >
        <span className="footer__arrow" aria-hidden="true" />
      </button>

      <div className="footer__inner">
        <div className="footer__brand">
          <button
            type="button"
            className="footer__name"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            Omar AlzuBi
          </button>

          <div className="footer__social">
            <p className="footer__social-label">Connect with me</p>
            <div className="footer__social-icons">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer__social-link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__nav-list">
            {navMenuItems.map(({ name, path, label }) => (
              <li key={name}>
                <button
                  type="button"
                  className="footer__nav-link"
                  onClick={() => handleNavLinkClick(path)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <hr className="footer__divider" />

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Omar AlzuBi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
