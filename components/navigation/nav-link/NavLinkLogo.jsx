import css from "styled-jsx/css";

import { fonts, fontSizes, lineHeight } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import NavLink from "./NavLink";

const NavLinkLogo= ({ as, href, children }) => {
  return (
    <NavLink as={as} href={href}>
      {isActive => <LogoAnchor isActive={isActive}>{children}</LogoAnchor>}
    </NavLink>
  );
};

export default NavLinkLogo;

const navLinkLogoStyles = css`
  a {
    position: relative;
    text-decoration: none;
    line-height: ${lineHeight};
    font-family: ${fonts.body};
    font-size: ${fontSizes.m};
    color: ${colors.main.dark};
    cursor: pointer;
  }

  a.active-link {
    color: orange;
  }
`;

const LogoAnchor = ({isActive, onClick, children}) => (
  <a onClick={onClick} className={isActive ? `active-link` : ``}>
    {children}
    <style jsx>{navLinkLogoStyles}</style>
  </a>
);
