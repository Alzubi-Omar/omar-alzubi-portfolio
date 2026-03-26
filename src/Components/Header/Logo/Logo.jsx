import React, { useContext } from "react";
import { HoverContext } from "@/context/HoverContext";
import hover from "@/assets/images/hover.png";
import "./Logo.css";

const Logo = () => {
  const { setIsHovered } = useContext(HoverContext);

  return (
    <button
      type="button"
      className="logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      aria-label="Toggle hover effect"
    >
      <img src={hover} alt="" className="hover-image" />
    </button>
  );
};

export default Logo;
