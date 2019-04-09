import css from "styled-jsx/css";
import { prefixHref } from "../../utils/prefixHref";

const heroImageStyles = css`
  .hero-wrapper {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(223, 223, 223, 0.6), rgba(0, 0, 134, 0.7)),
      url(${prefixHref`/static/office2.jpg`});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-content {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export function HeroImage({ children }) {
         return (
           <div className="hero-wrapper">
             <div className="hero-content">{children}</div>

             <style jsx>{heroImageStyles}</style>
           </div>
         );
       }
