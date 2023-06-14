import React from "react";
import { ImageTextSection } from "../../imageTextSection/imageTextSection";
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
import { ServicesSectionOneHeadlineStyled } from "./servicesSectionOne.style";
import { standardColors } from "../../../../palettes/standardColors.style";
const images = [
  {
    src: require("../../../../assets/images/family01.jpg"),
    alt: data.servicesPage.section1.image1.description,
    width: data.servicesPage.section1.image1.width,
    widthMobile: data.servicesPage.section1.image1.widthMobile,
    backgroundColor: standardColors.brown4,
    offsetX: "-3em",
    offsetY: "2em",
    offsetXMobile: "-1em",
    offsetYMobile: "-3em",
  },
];

function ServicesSectionOneHeadline(props) {
  const { services } = props;

  return (
    <div className={props.className}>
      <TextStyled
        text={data.servicesPage.section1.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <br />
      <br />
      {services.map((service, i) => (
        <TextStyled
          key={i}
          text={service.title}
          sizeDesktop={desktopSmall}
          sizeTablet={tabletSmall}
          sizeMobile={mobileSmall}
          textWeight={"bold"}
          linkTo={"#" + service.title}
        />
      ))}
    </div>
  );
}

function ServicesSectionOne(props) {
  const services = data.servicesPage.services;

  return (
    <ImageTextSection
      className={props.className}
      borderImagesHeight={"220px"}
      textContentFirst={
        <ServicesSectionOneHeadlineStyled services={services} />
      }
      images={[images[0]]}
    />
  );
}

export { ServicesSectionOne, ServicesSectionOneHeadline };
