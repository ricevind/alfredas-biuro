import Head from "next/head";

import Nav from "./Nav";
import NavLink from "./NavLink";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav>
        <NavLink href="/">Home</NavLink> |<NavLink href="/about">About</NavLink>{" "}
        |<NavLink href="/contact">Contact</NavLink>
      </Nav>
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);
