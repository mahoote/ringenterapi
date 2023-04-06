import React from "react";
import { TextStyled } from "../../../text/text.style";
import {
  MainSectionOneAboutStyled,
  MainSectionOneHeadlineStyled,
} from "./mainSectionOne.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { ButtonStyled } from "../../../button/button.style";

import data from "../../../../assets/data.json";
import { Link } from "react-router-dom";
import { ImageTextSection } from "../../imageTextSection/imageTextSection";

const images = [
  {
    src: require("../../../../assets/images/people01.jpg"),
    alt: data.homePage.section1.image1.description,
    width: data.homePage.section1.image1.width,
    widthMobile: data.homePage.section1.image1.widthMobile,
    offsetX: "-3em",
    offsetY: "2em",
    offsetXMobile: "-2em",
    offsetYMobile: "-1em",
  },
  {
    src: require("../../../../assets/images/lin01.jpg"),
    alt: data.homePage.section1.image2.description,
    width: data.homePage.section1.image2.width,
    widthMobile: data.homePage.section1.image2.widthMobile,
    backgroundColor: standardColors.brown3,
    offsetX: "2em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function MainSectionOneAbout(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={data.homePage.section1.about.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.homePage.section1.about.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        className={"my-5"}
        text={"Les mer om Lin ➝"}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
        color={standardColors.brown3}
        linkTo={"/about"}
      />
    </div>
  );
}

function MainSectionOneHeadline(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={data.homePage.section1.heading.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
        highlightPosStart={
          data.homePage.section1.heading.line1.highlightPosStart
        }
        highlightPosEnd={data.homePage.section1.heading.line1.highlightPosEnd}
        highlightColor={standardColors.blue1}
      />
      <TextStyled
        className={"my-5"}
        text={data.homePage.section1.heading.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        text={data.homePage.section1.heading.line3.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />

      <div className={"is-hidden-tablet"}>
        <hr
          className={"my-6"}
          style={{ backgroundColor: standardColors.black1 }}
        />
        <Link to={data.links[3].pageLink}>
          <ButtonStyled
            text={data.links[3].name}
            borderWidth={"2.3px"}
            textSize={"4"}
          />
        </Link>
      </div>
    </div>
  );
}

function MainSectionOne(props) {
  return (
    <ImageTextSection
      className={props.className}
      borderImagesHeight={"500px"}
      textContentFirst={<MainSectionOneHeadlineStyled />}
      images={[images[0], images[1]]}
      textContentSecond={<MainSectionOneAboutStyled />}
    />
  );
}

export { MainSectionOne, MainSectionOneHeadline, MainSectionOneAbout };
