import Link from "next/link";
import css from "styled-jsx/css";

import { fonts, fontSizes } from "../../styles/typography";
import { prefixHref } from "../../utils/prefixHref";
import { colors } from "../../styles/colors";
import { withRouter } from "next/router";

const navLinkStyles = css`
  a {
    position: relative;
    text-decoration: none;
    font-family: ${fonts.body};
    font-size: ${fontSizes.m};
    color: ${colors.main.dark};
  }


  a.active-link:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.3em;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${colors.accent.dark};
  }
`;

const NavLink = withRouter(({ as = "", href, router, children }) => {
  const isActive = () => router.pathname === href;

  return (
    <>
      <Link as={as} href={prefixHref`${href}`}>
        <a className={isActive() && "active-link"}>{children}</a>
      </Link>
      <style jsx>{navLinkStyles}</style>
    </>
  );
});

export default NavLink;
