import css from "styled-jsx/css";

import { fonts, fontSizes, lineHeight } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import NavLink from "./NavLink";

const NavLinkMain = ({ as, href, children }) => {
  return (
    <NavLink as={as} href={href}>
      {isActive => <MainAnchor isActive={isActive}>{children}</MainAnchor>}
    </NavLink>
  );
};

export default NavLinkMain;

const navLinkMainStyles = css`
  a {
    position: relative;
    text-decoration: none;
    line-height: ${lineHeight};
    font-family: ${fonts.body};
    font-size: ${fontSizes.m};
    color: ${colors.main.dark};
    cursor: pointer;
  }

  a.active-link:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.3em;
    left: 0;
    height: 0.1em;
    width: 100%;
    background-color: ${colors.accent.dark};
  }
`;

const MainAnchor = ({isActive, onClick, children}) => (
  <a onClick={onClick} className={isActive ? `active-link` : ``}>
    {children}
    <style jsx>{navLinkMainStyles}</style>
  </a>
);
