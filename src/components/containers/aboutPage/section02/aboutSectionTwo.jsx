import data from "../../../../assets/data.json";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { TextStyled } from "../../../text/text.style";
import {
  AboutSectionTwoContentStyled,
  AboutSectionTwoParagraphItemStyled,
} from "./aboutSectionTwo.style";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";

function AboutSectionTwoParagraphItem(props) {
  const { list, hasStyleType } = props;

  return (
    <div className={props.className}>
      {hasStyleType ? (
        <ul style={{ listStyleType: "square" }}>
          {list.map((item, i) => (
            <li key={i}>
              <TextStyled
                className={"my-2"}
                text={item}
                sizeDesktop={desktopSmall}
                sizeTablet={tabletSmall}
                sizeMobile={mobileSmall}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <TextStyled
                className={"my-2"}
                text={item}
                sizeDesktop={desktopSmall}
                sizeTablet={tabletSmall}
                sizeMobile={mobileSmall}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AboutSectionTwoParagraph(props) {
  return (
    <Loader
      content={
        <div className={"my-5 py-1"}>
          <TextStyled
            className={"mb-3"}
            text={props.headline}
            sizeDesktop={tabletSmall}
            sizeTablet={tabletSmall}
            sizeMobile={tabletSmall}
            textWeight={"bold"}
          />
          <AboutSectionTwoParagraphItemStyled
            list={props.list}
            hasStyleType={props.hasStyleType}
          />
        </div>
      }
    />
  );
}

function AboutSectionTwoContent(props) {
  const paragraphs = data.aboutPage.section2.paragraphs;

  return (
    <CenterStyled
      content={
        <div className={props.className}>
          <div className={"pt-5 pb-0"}>
            <Loader
              content={
                <TextStyled
                  text={data.aboutPage.section2.headline1.text}
                  sizeDesktop={desktopBig}
                  sizeTablet={tabletBig}
                  sizeMobile={mobileBig}
                  textWeight={"bold"}
                />
              }
            />
          </div>
          <div>
            {paragraphs.map((p, i) => (
              <AboutSectionTwoParagraph
                key={i}
                headline={p.headline.text}
                list={p.list}
                hasStyleType={true}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}

function AboutSectionTwo(props) {
  return (
    <div className={props.className}>
      <CenterStyled content={<AboutSectionTwoContentStyled />} />
    </div>
  );
}

export {
  AboutSectionTwo,
  AboutSectionTwoContent,
  AboutSectionTwoParagraphItem,
  AboutSectionTwoParagraph,
};
