import React from "react";

import { HeroImage } from "../components/layout/HeroImage";
import { pagesURLs } from "../services/navigation";
import NavLinkMain from "../components/navigation/nav-link/NavLinkMain";
import { SimpleLayout } from "../components/layout/Layout";

export default function Index() {
  return (
    <SimpleLayout>
      <div className="full-page">
        <HeroImage>
          <NavLinkMain as={pagesURLs.about} href={pagesURLs.about}>
            O nas
          </NavLinkMain>
        </HeroImage>
        <style jsx>
          {`
            .full-page {
              position: fixed;
              top: 0;
              left: 0;
              z-index: -1;
              width: 100vw;
              height: 100vh;
            }
          `}
        </style>
      </div>
    </SimpleLayout>
  );
}
