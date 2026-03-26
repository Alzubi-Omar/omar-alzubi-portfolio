import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // No hash — snap to top on route change
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = location.hash.slice(1);
    let cancelled = false;

    // Retry across frames to support lazy-loaded sections (Suspense)
    const tryScroll = (attempt = 0) => {
      if (cancelled) return;

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
      if (attempt < 12) {
        requestAnimationFrame(() => tryScroll(attempt + 1));
      }
    };

    tryScroll();

    // Cleanup — cancels any in-flight rAF callbacks if component unmounts
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
