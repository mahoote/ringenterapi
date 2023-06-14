import React from "react";
import data from "../../../../assets/data.json";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { Container } from "./servicesSectionTwo.style";

function ServicesSectionTwo() {
  const services = data.servicesPage.services;

  return (
    <Container>
      {services.map((service, i) => (
        <div key={i} className={"my-6"} id={service.title}>
          <TextStyled
            text={service.title}
            sizeDesktop={desktopBig}
            sizeTablet={tabletBig}
            sizeMobile={tabletBig}
          />
          <TextStyled
            text={service.about}
            sizeDesktop={desktopSmall}
            sizeTablet={tabletSmall}
            sizeMobile={mobileSmall}
          />
        </div>
      ))}
    </Container>
  );
}

export { ServicesSectionTwo };
