import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const HoverContext = createContext({
  isHovered: false,
  setIsHovered: () => {},
});

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HoverContext.Provider>
  );
};

HoverProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
