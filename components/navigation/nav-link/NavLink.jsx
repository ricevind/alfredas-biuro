import Link from "next/link";

import { prefixHref } from "../../../utils/prefixHref";
import { withRouter } from "next/router";

const NavLink = withRouter(({ as = "", href, router, children }) => {
  const isActive = () => router.pathname === as;
  return (
    <>
      <Link as={prefixHref(as)} href={href}>
        {children(isActive())}
      </Link>
    </>
  );
});

export default NavLink;
