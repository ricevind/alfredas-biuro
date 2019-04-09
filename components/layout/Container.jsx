import css from "styled-jsx/css";
import { rhythmUnit } from "../../styles/typography";
import { fluidTypeConstants } from "../../styles/fluid-type";

const containerCSS = css`
  .centering-wrapper {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .centered-element {
    // outline: dashed crimson;
    max-width: ${fluidTypeConstants.screenMax};
  }
`;

export const Container = ({ size = 0, children }) => {
  return (
    <div className="centering-wrapper">
      <div className="centered-element">{children}</div>
      <style jsx>{`
        margin-top: ${rhythmUnit(size)};
      `}</style>
      <style jsx>{containerCSS}</style>
    </div>
  );
};
