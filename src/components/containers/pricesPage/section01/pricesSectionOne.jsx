import data from "../../../../assets/data.json";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import { TextStyled } from "../../../text/text.style";
import { desktopBig, mobileBig, tabletBig } from "../../../globals/fontSizes";
import { AboutSectionTwoParagraph } from "../../aboutPage/section02/aboutSectionTwo";
import { standardColors } from "../../../../palettes/standardColors.style";

function PricesSectionOne(props) {
  const prices = data.pricesPage.section1.prices;

  return (
    <CenterStyled
      content={
        <div className={props.className}>
          <div className={"pt-5 pb-0 has-text-centered"}>
            <Loader
              content={
                <>
                  <TextStyled
                    text={data.pricesPage.section1.line1.text}
                    sizeDesktop={desktopBig}
                    sizeTablet={tabletBig}
                    sizeMobile={mobileBig}
                    textWeight={"bold"}
                  />
                  <div>
                    <hr
                      style={{
                        backgroundColor: standardColors.black1,
                        maxWidth: "30%",
                        margin: "2rem auto",
                      }}
                    />
                  </div>
                </>
              }
            />
          </div>
          <div>
            {prices.map((p, i) => {
              const { value } = p;

              return (
                <AboutSectionTwoParagraph
                  key={i}
                  headline={p.service.text}
                  list={[
                    `${value
                      .toFixed(2)
                      .toString()
                      .replace(".", ",")} kr (eks mva)`,
                  ]}
                  hasStyleType={false}
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
}

export { PricesSectionOne };
