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
import { ButtonStyled } from "../../../button/button.style";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";

import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { standardColors } from "../../../../palettes/standardColors.style";

import data from "../../../../assets/data.json";
import { Link } from "react-router-dom";

// Same image as section three. Only shows on mobile screen.
const images = [
  {
    src: require("../../../../assets/images/couch01.jpg"),
    alt: data.homePage.section3.image1.description,
    width: data.homePage.section3.image1.width,
    widthMobile: data.homePage.section3.image1.widthMobile,
    offsetX: "0em",
    offsetY: "3em",
  },
];

function MainSectionFour(props) {
  return (
    <div className={props.className}>
      <Loader
        content={
          <div
            className={" is-hidden-tablet "}
            style={{
              backgroundColor: standardColors.brown3,
              marginBottom: "6em",
            }}
          >
            <BorderImageStyled
              src={images[0].src}
              alt={images[0].alt}
              backgroundColor={standardColors.brown3}
              width={images[0].width}
              padding={"1em"}
              offsetY={images[0].offsetY}
              offsetX={images[0].offsetX}
            />
          </div>
        }
      />

      <Loader
        content={
          <div className={"columns is-centered is-vcentered is-multiline mx-2"}>
            <div className={"column is-6-desktop is-9-tablet px-5"}>
              <CenterStyled
                content={
                  <div>
                    <TextStyled
                      text={data.homePage.section4.contact.line1.text}
                      sizeDesktop={desktopBig}
                      sizeTablet={tabletBig}
                      sizeMobile={mobileBig}
                      textWeight={"bold"}
                    />
                    <TextStyled
                      className={"my-5"}
                      text={data.homePage.section4.contact.line2.text}
                      sizeDesktop={desktopSmall}
                      sizeTablet={tabletSmall}
                      sizeMobile={mobileSmall}
                    />
                  </div>
                }
              />
            </div>
            <div className={"column is-3-widescreen is-12 px-5"}>
              <CenterStyled
                content={
                  <Link to={data.links[3].pageLink}>
                    <ButtonStyled
                      className={"py-4"}
                      text={data.homePage.section4.contact.button.name}
                      borderWidth={"2.2px"}
                      textSize={2}
                      textSizeTouch={3}
                    />
                  </Link>
                }
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export { MainSectionFour };
