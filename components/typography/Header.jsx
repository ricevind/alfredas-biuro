import { headerCSS } from "../styles/typography";

export const Header = ({ size, children }) => {
  const HTag = sizeToHeader(size);

  return (
    <HTag>
      {children}
      <style jsx>{`
        ${HTag} {
          ${headerCSS(size)}
        }
      `}</style>
    </HTag>
  );
};

function sizeToHeader(size) {
  const map = {
    s: `h4`,
    m: `h3`,
    l: `h2`,
    xl: `h1`
  };

  return map[size];
}
