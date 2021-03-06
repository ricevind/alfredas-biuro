import Head from "next/head";

import { body, root, html } from "../../styles/base";
import { prefixHref } from "../../utils/prefixHref";
import { rhythmUnit } from "../../styles/typography";

export default ({ children, title }) => (
  <SimpleLayout title={title}>
    <div className={"main-container"}>
      {children}
      <style jsx>{`
        .main-container {
          margin: ${rhythmUnit()};
        }
      `}</style>
    </div>
  </SimpleLayout>
);

export const SimpleLayout = ({
  title = "This is the default title",
  children
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins&amp;subset=latin-ext"
        rel="stylesheet"
      />
      <link href={prefixHref`/static/reset.css`} rel="stylesheet" />
    </Head>
    {children}
    <style jsx global>
      {root}
    </style>
    <style jsx global>
      {html}
    </style>
    <style jsx global>
      {body}
    </style>
  </>
);
