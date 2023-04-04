import React, { useState } from "react";
import { CenterStyled } from "../containers/center/center.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";
import { size } from "../../sizes/screenSize.style";
import { useResize } from "../../hooks/screenDetection";

import data from "../../assets/data.json";

const currentYear = new Date().getFullYear();

function Footer(props) {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth >= size.tablet) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  useResize(handleResize);

  function FooterRightMobile() {
    return (
      <div>
        <TextStyled
          text={data.websiteName}
          color={standardColors.blue3}
          textWeight={"bold"}
          sizeTablet={3}
          sizeMobile={4}
        />
        <div className={"mt-5"}>
          <InfoLines />
        </div>
      </div>
    );
  }

  function FooterLeftMobile() {
    return (
      <div>
        <TextStyled
          className={"my-6"}
          text={`© ${data.websiteName} ${currentYear}`}
          sizeTouch={6}
        />
        <TextStyled
          linkTo={"https://github.com/mahoote?tab=repositories"}
          text={"Nettside av Martin Teigen"}
        />
      </div>
    );
  }

  function FooterRight() {
    return (
      <div>
        <TextStyled
          text={data.websiteName}
          color={standardColors.blue3}
          textWeight={"bold"}
          sizeDesktop={2}
          sizeTablet={3}
        />
        <TextStyled
          className={"my-6"}
          text={`© ${data.websiteName} ${currentYear}`}
          size={5}
          sizeTouch={6}
        />
        <TextStyled
          linkTo={"https://github.com/mahoote?tab=repositories"}
          text={"Nettside av Martin Teigen"}
        />
      </div>
    );
  }

  function InfoLines() {
    const info = data.info;

    return (
      <div>
        {info.map((line, i) => (
          <TextStyled key={i} text={line.text} sizeDesktop={5} />
        ))}
      </div>
    );
  }

  function FooterLeft() {
    return <InfoLines />;
  }

  return (
    <footer className={props.className + " footer py-6"}>
      {isMobile ? (
        <div className={" columns is-multiline mx-3"}>
          <FooterRightMobile />
          <FooterLeftMobile />
        </div>
      ) : (
        <div className={" columns is-multiline is-centered is-vcentered"}>
          <CenterStyled className={"column is-5"} content={<FooterRight />} />
          <CenterStyled className={"column is-5"} content={<FooterLeft />} />
        </div>
      )}
    </footer>
  );
}
export { Footer };
