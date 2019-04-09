import css from "styled-jsx/css";
import { rhythmUnit } from "../../styles/typography";
import { pagesURLs } from "../../services/navigation";
import NavLinkMain from "./nav-link/NavLinkMain";
import NavLinkLogo from "./nav-link/NavLinkLogo";

const NavStyles = css`
  nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-top: ${rhythmUnit()};
  }

  nav > :global(a:not(:first-child)) {
    margin-left: 20px;
  }

  .push-left {
    margin-right: auto;
  }
`;

export default function Nav() {
  return (
    <nav>
      <span className="push-left">
        <NavLinkLogo as={"/"} href={"/"}>
          Biuro Alfreda Sobierajska
        </NavLinkLogo>
      </span>
      <NavLinkMain as={pagesURLs.about} href={pagesURLs.about}>
        O nas
      </NavLinkMain>
      <NavLinkMain as={pagesURLs.services} href={pagesURLs.services}>
        Usługi
      </NavLinkMain>
      <NavLinkMain as={pagesURLs.priceList} href={pagesURLs.priceList}>
        Cennik
      </NavLinkMain>
      <NavLinkMain as={pagesURLs.contact} href={pagesURLs.contact}>
        Kontakt
      </NavLinkMain>
      <style jsx>{NavStyles}</style>
    </nav>
  );
}
