import Link from "next/link";
import css from "styled-jsx/css";

const navLinkStyles = css`
  a {
    text-decoration: none;
  }
`;

export default function NavLink({ as = "", href, children }) {
  return (
    <div>
      <Link as={as} href={href}>
        <a>{children}</a>
      </Link>
      <style jsx>{navLinkStyles}</style>
    </div>
  );
}
