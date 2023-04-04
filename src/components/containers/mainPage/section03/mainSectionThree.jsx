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
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import { MainSectionThreeServiceStyled } from "./mainSectionThree.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import data from "../../../../assets/data.json";

// Image does not show on mobile screen. See section four.
const images = [
  {
    src: require("../../../../assets/images/couch01.jpg"),
    alt: data.homePage.section3.image1.description,
    width: data.homePage.section3.image1.width,
    widthMobile: data.homePage.section3.image1.widthMobile,
    offsetX: "-4em",
    offsetY: "0",
  },
];

function MainSectionThreeHeadline(props) {
  return (
    <CenterStyled
      className={props.className + " has-text-centered "}
      content={
        <div>
          <Loader
            content={
              <TextStyled
                className={"my-5 mx-2"}
                text={data.homePage.section3.heading.line1.text}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
            }
          />
          <Loader
            content={
              <TextStyled
                text={data.homePage.section3.heading.line2.text}
                sizeDesktop={desktopSmall}
                sizeTablet={tabletSmall}
                sizeMobile={mobileSmall}
              />
            }
          />
        </div>
      }
    />
  );
}

function MainSectionThreeService(props) {
  const { i, service, className } = props;

  return (
    <div key={i} className={" column is-4 m-3 "}>
      <Loader
        content={
          <>
            <div className={className + " p-6 "}>
              <TextStyled
                text={service.title}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
              {service.list.map((item, i) => (
                <ul key={i}>
                  <li className={" my-2 "}>
                    <TextStyled
                      text={item}
                      sizeDesktop={desktopSmall}
                      sizeTablet={tabletSmall}
                      sizeMobile={mobileSmall}
                    />
                  </li>
                </ul>
              ))}
            </div>
            <TextStyled
              className={"my-5"}
              text={"Les mer ➝"}
              sizeDesktop={desktopSmall}
              sizeTablet={tabletSmall}
              sizeMobile={mobileSmall}
              color={standardColors.brown3}
              linkTo={service.pageLink}
            />
          </>
        }
      />
    </div>
  );
}

function MainSectionThreeServices() {
  const categories = data.servicesPage.categories;

  return (
    <CenterStyled
      content={
        <div className={"columns is-multiline is-centered is-vcentered"}>
          {categories.map((service, i) => (
            <MainSectionThreeServiceStyled key={i} i={i} service={service} />
          ))}
          {/* Does currently not display at all. Remove 'is-hidden' to show. */}
          <div className={" column is-4 my-3 ml-5 is-hidden "}>
            <Loader
              content={
                <CenterStyled
                  content={
                    <BorderImageStyled
                      src={images[0].src}
                      alt={images[0].alt}
                      backgroundColor={standardColors.brown3}
                      width={images[0].width}
                      padding={"1em"}
                      offsetY={images[0].offsetY}
                      offsetX={images[0].offsetX}
                    />
                  }
                />
              }
            />
          </div>
        </div>
      }
    />
  );
}

function MainSectionThree(props) {
  return (
    <div className={props.className}>
      <MainSectionThreeHeadline className={"mb-6"} />
      <MainSectionThreeServices />
    </div>
  );
}

export { MainSectionThree, MainSectionThreeService };
