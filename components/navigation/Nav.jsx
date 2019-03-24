import css from "styled-jsx/css";
import NavLink from "./NavLink";
import { prefixHref } from "../../utils/prefixHref";
import { rhythmUnit } from "../../styles/typography";

const NavStyles = css`
  nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-top: ${rhythmUnit()};
    margin-bottom: ${rhythmUnit()};
  }
  
  nav > :global(a:not(:first-child)) {
      margin-left: 20px;
  }
  
`;

const pagesUrls = {
  about: "/o-nas",
  priceList: "/cennik",
  services: "/uslugi",
  contact: "/kontakt"
};

export default function Nav() {
  return (
    <nav>
      <NavLink href={prefixHref(pagesUrls.about)}>O nas</NavLink>
      <NavLink href={prefixHref(pagesUrls.services)}>Usługi</NavLink>
      <NavLink href={prefixHref(pagesUrls.priceList)}>Cennik</NavLink>
      <NavLink href={prefixHref(pagesUrls.contact)}>Kontakt</NavLink>
      <style jsx>{NavStyles}</style>
    </nav>
  );
}
