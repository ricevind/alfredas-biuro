import { cssPartial } from "../utils/css/css-partial";

export const mode = 1.618;
export const lineHeight = 1.2;
export const fonts = {
  header: `"Nunito Sans", sans-serif`,
  body: '"Poppins", sans-serif'
};
export const fontSizes = {
  s: `calc(var(--font-size) / ${mode})`,
  m: `calc(var(--font-size))`,
  l: `calc(var(--font-size) * ${mode})`,
  xl: `calc(var(--font-size) * ${mode ** 2})`
};

export const rhythmUnit = (ordinal = 0) => `
  calc(var(--font-size) * ${lineHeight * mode ** ordinal})
`;

export const paragraphCSS = () => cssPartial`
    font-family: ${fonts.body};
    font-size: ${fontSizes.m};
    line-height:  ${lineHeight};
    margin-top: ${rhythmUnit()};
`;

export const headerCSS = size => cssPartial`
    font-family: ${fonts.header};
    font-size: ${fontSizes[size]};
    line-height:  ${lineHeight};
  `;
