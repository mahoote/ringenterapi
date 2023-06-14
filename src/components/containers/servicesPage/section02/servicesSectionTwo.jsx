import React from "react";
import data from "../../../../assets/data.json";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { standardColors } from "../../../../palettes/standardColors.style";

function ServicesSectionOneService(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={props.headline}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        className={"my-5"}
        text={props.text}
        sizeDesktop={desktopSmall}
        sizeTablet={desktopSmall}
        sizeMobile={desktopSmall}
      />
    </div>
  );
}

function ServicesSectionTwo(props) {
  const services = data.servicesPage.services;

  return (
    <div>
      {services.map((service, i) => (
        <div key={i} className={"my-6"}>
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
    </div>
  );
}

export { ServicesSectionTwo };
