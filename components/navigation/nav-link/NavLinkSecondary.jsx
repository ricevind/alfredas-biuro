import css from "styled-jsx/css";

import { fonts, fontSizes, lineHeight } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import NavLink from "./NavLink";

const NavLinkSecondary= ({ as, href, children }) => {
  return (
    <NavLink as={as} href={href}>
      {isActive => <SecondaryAnchor isActive={isActive}>{children}</SecondaryAnchor>}
    </NavLink>
  );
};

export default NavLinkSecondary;

const navLinkSecondaryStyles = css`
  a {
    position: relative;
    text-decoration: none;
    line-height: ${lineHeight};
    font-family: ${fonts.body};
    font-size: ${fontSizes.s};
    color: ${colors.main.normal};
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

const SecondaryAnchor = ({isActive, onClick, children}) => (
  <a onClick={onClick} className={isActive ? `active-link` : ``}>
    {children}
    <style jsx>{navLinkSecondaryStyles}</style>
  </a>
);
