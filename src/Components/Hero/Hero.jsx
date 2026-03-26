import React, { useContext } from "react";
import { HoverContext } from "@/context/HoverContext";
import "./Hero.css";
import htmlSvg from "@/assets/svgs/html.svg";
import reactSvg from "@/assets/svgs/react.svg";
import jsSvg from "@/assets/svgs/js.svg";
import SvgDisplay from "./SvgDisplay/SvgDisplay";
import HeroInfo from "./HeroInfo/HeroInfo";
import HeroActions from "./HeroActions/HeroActions";

const svgCollection = [htmlSvg, reactSvg, jsSvg];

const Hero = () => {
  const { isHovered } = useContext(HoverContext);

  return (
    <section id="home" className="hero-container">
      <div className="hero-section">
        <SvgDisplay svgCollection={svgCollection} />
        <HeroInfo isHovered={isHovered} />
        <HeroActions />
      </div>
    </section>
  );
};

export default Hero;
