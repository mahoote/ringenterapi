import { TextStyled } from "../../../text/text.style";
import data from "../../../../assets/data.json";
import {
  desktopBig,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import React from "react";
import { CenterStyled } from "../../center/center.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContactInfoContentStyled,
  ContactInfoImageStyled,
} from "./contactInfo.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { Loader } from "../../loader/loader";

const images = [
  {
    src: require("../../../../assets/images/chairs01.jpg"),
    alt: data.contactPage.contactInfo.image1.description,
    width: data.contactPage.contactInfo.image1.width,
    widthMobile: data.contactPage.contactInfo.image1.widthMobile,
    offsetX: "2em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function ContactInfoLine(props) {
  let icon;

  switch (props.line.icon) {
    case "user": {
      icon = faUser;
      break;
    }
    case "email": {
      icon = faEnvelope;
      break;
    }
    case "phone": {
      icon = faPhone;
      break;
    }
    case "location": {
      icon = faLocationPin;
      break;
    }
    default: {
      icon = null;
      break;
    }
  }

  return (
    <div className={"my-3 is-flex is-vcentered"}>
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          size={"2x"}
          className={"mr-4"}
          style={{ width: "40px" }}
        />
      ) : (
        ""
      )}
      <TextStyled
        text={props.line.text}
        sizeDesktop={tabletSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function ContactInfoContent(props) {
  const info = data.info;

  return (
    <Loader
      content={
        <CenterStyled
          className={props.className}
          content={
            <div className={"my-6"}>
              <TextStyled
                className={"has-text-centered"}
                text={data.contactPage.contactInfo.line1.text}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
              <div className={"mt-6"}>
                {info.map((line, i) => (
                  <ContactInfoLine key={i} line={line} />
                ))}
              </div>
            </div>
          }
        />
      }
    />
  );
}

function ContactInfoImage(props) {
  return (
    <div className={props.className}>
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
  );
}

function ContactInfo(props) {
  return (
    <div className={props.className}>
      <ContactInfoContentStyled />
      <ContactInfoImageStyled className={"is-hidden-touch"} />
    </div>
  );
}

export { ContactInfo, ContactInfoContent, ContactInfoImage };
