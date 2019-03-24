import css from "styled-jsx/css";

import {
  fluidFontSizeCSS,
  fluidTypeConstants,
  screenBreakpoints
} from "./fluid-type";

export const root = css.global`
  :root {
    ${fluidFontSizeCSS()}
  }
`;

export const html = css.global`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  html {
    font-size: ${fluidTypeConstants.baseFontSize};
  }
`;

export const body = css.global`
  body {
    font-size: var(--font-size);
  }
  
  @media screen and (max-width: ${screenBreakpoints.small}) {
        body {
            --font-size: ${fluidTypeConstants.minFontSize};
        }
    }
    
    @media screen and (min-width: ${screenBreakpoints.medium}) {
        body {
            --font-size: ${fluidTypeConstants.maxFontSize};
        }
    }
`;
