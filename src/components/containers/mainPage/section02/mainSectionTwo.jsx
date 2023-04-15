import { TextStyled } from "../../../text/text.style";
import React, { useRef } from "react";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { MainSectionTwoTextStyled } from "./mainSectionTwo.style";
import data from "../../../../assets/data.json";

function MainSectionTwoText(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"is-hidden-mobile"}
        text={data.homePage.section2.line.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"light"}
        highlightPosStart={data.homePage.section2.line.highlightPosStart}
        highlightPosEnd={data.homePage.section2.line.highlightPosEnd}
        highlightTextWeight={"bold"}
      />
      <TextStyled
        className={"is-hidden-tablet has-text-centered"}
        textWeight={"light"}
        text={data.homePage.section2.line.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={desktopSmall}
        highlightPosStart={data.homePage.section2.line.highlightPosStart}
        highlightPosEnd={data.homePage.section2.line.highlightPosEnd}
        highlightTextWeight={"bold"}
      />
    </div>
  );
}

function MainSectionTwo(props) {
  const ref = useRef();
  // const { topStart, bottomEnd } = useGetScreenDistance(ref);
  // const [showElement, setShowElement] = useState(false);

  // const showThreshold = 300;

  // useEffect(() => {
  //   // console.log("Top: " + topStart);
  //   // console.log("Bottom end: " + bottomEnd);
  //
  //   if (topStart < showThreshold && bottomEnd < showThreshold) {
  //     setShowElement(true);
  //   } else setShowElement(false);
  // }, [topStart, bottomEnd]);

  return (
    <div className={props.className} ref={ref}>
      <MainSectionTwoTextStyled showElement={true} />
    </div>
  );
}

export { MainSectionTwo, MainSectionTwoText };
