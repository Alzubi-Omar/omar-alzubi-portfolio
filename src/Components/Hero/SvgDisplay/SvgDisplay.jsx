import React from "react";
import useSvgEffects from "@/hooks/useSvgEffects";
import "./SvgDisplay.css";
import PropTypes from "prop-types";

const SvgDisplay = ({ svgCollection }) => {
  const svgElements = useSvgEffects(svgCollection, 10);

  return (
    <div className="svgs-container">
      {svgElements.map(({ index, src, top, startPosition, duration, size }) => (
        <div
          key={index}
          className="svg"
          style={{
            top,
            left: startPosition,
            animationDuration: duration,
            width: size,
            height: size,
          }}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

SvgDisplay.propTypes = {
  svgCollection: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SvgDisplay;
