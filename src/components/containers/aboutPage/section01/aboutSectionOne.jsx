import React from "react";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";

import data from "../../../../assets/data.json";
import {
  AboutSectionOneIntroStyled,
  AboutSectionOneParagraphStyled,
} from "./aboutSectionOne.style";
import { ImageTextSection } from "../../imageTextSection/imageTextSection";

const images = [
  {
    src: require("../../../../assets/images/lin02.jpg"),
    alt: data.aboutPage.section1.image1.description,
    width: data.aboutPage.section1.image1.width,
    widthMobile: data.aboutPage.section1.image1.widthMobile,
    offsetX: "-2em",
    offsetY: "0.5em",
    offsetXMobile: "-0em",
    offsetYMobile: "-3em",
  },
];

function AboutSectionOneIntro(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={data.aboutPage.section1.headline1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.aboutPage.section1.paragraph1.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function AboutSectionOneParagraph(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={data.aboutPage.section1.paragraph2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function AboutSectionOne(props) {
  return (
    <ImageTextSection
      className={props.className}
      borderImagesHeight={"300px"}
      textContentFirst={<AboutSectionOneIntroStyled />}
      images={[images[0]]}
      textContentSecond={<AboutSectionOneParagraphStyled />}
    />
  );
}

export { AboutSectionOne, AboutSectionOneIntro, AboutSectionOneParagraph };
