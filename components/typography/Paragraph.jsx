import { paragraphCSS } from "../../styles/typography";

export const Paragraph = ({ children }) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          ${paragraphCSS()}
        }
      `}</style>
    </p>
  );
};
