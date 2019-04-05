import Link from "next/link";
import css from "styled-jsx/css";

import { fonts, fontSizes, lineHeight } from "../../styles/typography";
import { prefixHref } from "../../utils/prefixHref";
import { colors } from "../../styles/colors";
import { withRouter } from "next/router";

const navLinkStyles = css`
  a {
    position: relative;
    text-decoration: none;
    line-height: ${lineHeight};
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
    height: 0.1em;
    width: 100%;
    background-color: ${colors.accent.dark};
  }
`;

const NavLink = withRouter(({ as = "", href, router, children }) => {
  const isActive = () => router.pathname === as;
  return (
    <>
      <Link as={prefixHref(as)} href={href}>
        <a className={isActive() && "active-link"}>{children}</a>
      </Link>
      <style jsx>{navLinkStyles}</style>
    </>
  );
});

export default NavLink;
