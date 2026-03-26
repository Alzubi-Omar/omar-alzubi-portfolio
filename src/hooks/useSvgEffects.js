import { useMemo } from "react";

const useSvgEffects = (svgSources = [], numberOfElements = 10) => {
  return useMemo(() => {
    if (!Array.isArray(svgSources) || svgSources.length === 0) {
      console.warn("No SVG sources provided. Returning an empty array.");
      return [];
    }

    return Array.from({ length: numberOfElements }).map((_, index) => {
      const randomSrc =
        svgSources[Math.floor(Math.random() * svgSources.length)];

      // Constrain icons to left or right edge only — never center
      const side = index % 2 === 0 ? "left" : "right";
      const randomStartPosition =
        side === "left"
          ? `${Math.random() * 15}vw` // left edge: 0–15vw
          : `${82 + Math.random() * 15}vw`; // right edge: 82–97vw

      const randomTop = `${Math.random() * 100}vh`;
      const randomDuration = `${70 + Math.random() * 40}s`;

      // Randomise size between 28px and 48px
      const randomSize = `${28 + Math.floor(Math.random() * 20)}px`;

      return {
        src: randomSrc,
        top: randomTop,
        duration: randomDuration,
        startPosition: randomStartPosition,
        size: randomSize,
        index,
      };
    });
  }, [svgSources, numberOfElements]);
};

export default useSvgEffects;
