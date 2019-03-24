import { cssPartial } from "../utils/css/css-partial";
import { stripUnit } from "../utils/css/strip-unit";

export const screenBreakpoints = {
  small: "22.5rem",
  medium: "100rem"
};

export const fluidTypeConstants = {
  baseFontSize: "0.625rem",
  maxFontSize: "2.4rem",
  minFontSize: "1.6rem",
  screenMin: "36rem",
  screenMax: "160rem"
};

export const fluidFontSizeCSS = () => {
  const { screenMax, screenMin, maxFontSize, minFontSize } = fluidTypeConstants;
  const minMaxScreenDiff = stripUnit(screenMax) - stripUnit(screenMin);
  const minMaxFontDiff = stripUnit(maxFontSize) - stripUnit(minFontSize);

  return cssPartial`
     --fluid-ratio: calc((100vw - ${screenMin}) / ${minMaxScreenDiff});
     --font-size: calc(${minFontSize} + ${minMaxFontDiff} * var(--fluid-ratio));
  `;
};
