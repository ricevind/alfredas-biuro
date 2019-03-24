import { paragraphCSS } from "../styles/typography";

export const Paragraph = ({ children }) => (
  <p>
    {children}
    <style jsx>
      {`
        p {
          ${paragraphCSS()}
        }
      `}
    </style>
  </p>
);
