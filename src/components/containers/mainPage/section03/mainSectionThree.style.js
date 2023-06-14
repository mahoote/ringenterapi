import styled from "styled-components";
import { MainSectionThree, MainSectionThreeService } from "./mainSectionThree";
import { standardColors } from "../../../../palettes/standardColors.style";
import { device } from "../../../../sizes/screenSize.style";

const MainSectionThreeStyled = styled(MainSectionThree)`
  background-color: white;
  position: relative;
  z-index: 10;

  @media screen and ${device.tabletMax} {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
  }
`;

const MainSectionThreeServiceStyled = styled(MainSectionThreeService)`
  border: 3px solid ${standardColors.brown4};
  max-width: 35em;
`;

export { MainSectionThreeStyled, MainSectionThreeServiceStyled };
