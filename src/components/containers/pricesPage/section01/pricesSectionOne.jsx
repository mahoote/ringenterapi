import data from "../../../../assets/data.json";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import { TextStyled } from "../../../text/text.style";
import { desktopBig, mobileBig, tabletBig } from "../../../globals/fontSizes";
import { AboutSectionTwoParagraph } from "../../aboutPage/section02/aboutSectionTwo";

function PricesSectionOne(props) {
  const prices = data.pricesPage.section1.prices;

  return (
    <CenterStyled
      content={
        <div className={props.className}>
          <div className={"has-text-centered pt-5 pb-0"}>
            <Loader
              content={
                <TextStyled
                  text={data.pricesPage.section1.line1.text}
                  sizeDesktop={desktopBig}
                  sizeTablet={tabletBig}
                  sizeMobile={mobileBig}
                  textWeight={"bold"}
                />
              }
            />
          </div>
          <div>
            {prices.map((p, i) => (
              <AboutSectionTwoParagraph
                key={i}
                headline={p.service.text}
                list={[`${p.value.text}kr`]}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}

export { PricesSectionOne };
