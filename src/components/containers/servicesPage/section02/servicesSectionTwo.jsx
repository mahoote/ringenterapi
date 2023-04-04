import React from "react";
import data from "../../../../assets/data.json";
import { ImageTextSection } from "../../imageTextSection/imageTextSection";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  tabletBig,
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

  const images = [
    {
      src: require("../../../../assets/images/people01.jpg"),
      alt: services[0].image.description,
      width: services[0].image.width,
      widthMobile: services[0].image.widthMobile,
      backgroundColor: standardColors.brown3,
      offsetX: "2em",
      offsetY: "2em",
      offsetXMobile: "2em",
      offsetYMobile: "-1em",
    },
    {
      src: require("../../../../assets/images/people01.jpg"),
      alt: services[0].image.description,
      width: services[0].image.width,
      widthMobile: services[0].image.widthMobile,
      backgroundColor: standardColors.blue1,
      offsetX: "0em",
      offsetY: "2em",
      offsetXMobile: "-2em",
      offsetYMobile: "1em",
    },
  ];

  return (
    <ImageTextSection
      className={props.className}
      borderImagesHeight={"350px"}
      textContentFirst={
        <ServicesSectionOneService
          headline={services[0].title}
          text={services[0].about}
        />
      }
      images={[images[0], images[1]]}
      textContentSecond={
        <ServicesSectionOneService
          headline={services[1].title}
          text={services[1].about}
        />
      }
    />
  );
}

export { ServicesSectionTwo };
