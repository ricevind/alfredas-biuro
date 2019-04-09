import css from "styled-jsx/css";
import NavLinkSecondary from "../../../components/navigation/nav-link/NavLinkSecondary";
import { rhythmUnit } from "../../../styles/typography";
import { servicesPagesURLs } from "../../../services/navigation";

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
`;

const parentPagePrefix = url => `/uslugi${url}`;

export default function NavServices() {
  return (
    <nav>
      {Object.values(servicesPagesURLs).map((pageDefinition, i) => (
        <NavLinkSecondary
          key={i}
          as={parentPagePrefix(pageDefinition.url)}
          href={parentPagePrefix(pageDefinition.url)}
        >
          {pageDefinition.description}
        </NavLinkSecondary>
      ))}

      <style jsx>{NavStyles}</style>
    </nav>
  );
}
