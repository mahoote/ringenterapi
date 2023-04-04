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
  const list = props.list;

  return (
    <div className={props.className}>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <TextStyled
              text={item}
              sizeDesktop={desktopSmall}
              sizeTablet={tabletSmall}
              sizeMobile={mobileSmall}
            />
          </li>
        ))}
      </ul>
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
          <AboutSectionTwoParagraphItemStyled list={props.list} />
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
          <div className={"has-text-centered pt-5 pb-0"}>
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
      <AboutSectionTwoContentStyled />
    </div>
  );
}

export {
  AboutSectionTwo,
  AboutSectionTwoContent,
  AboutSectionTwoParagraphItem,
  AboutSectionTwoParagraph,
};
