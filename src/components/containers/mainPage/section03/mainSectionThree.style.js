import styled from "styled-components";
import { MainSectionThree, MainSectionThreeService } from "./mainSectionThree";
import { standardColors } from "../../../../palettes/standardColors.style";

const MainSectionThreeStyled = styled(MainSectionThree)`
  background-color: white;
  position: relative;
  z-index: 10;
`;

const MainSectionThreeServiceStyled = styled(MainSectionThreeService)`
  border: 3px solid ${standardColors.brown4};
  max-width: 27em;
`;

export { MainSectionThreeStyled, MainSectionThreeServiceStyled };
