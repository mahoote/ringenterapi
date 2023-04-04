import styled from "styled-components";
import {
  MainSectionOne,
  MainSectionOneAbout,
  MainSectionOneHeadline,
} from "./mainSectionOne";
import { standardColors } from "../../../../palettes/standardColors.style";

const MainSectionOneStyled = styled(MainSectionOne)`
  background-color: ${standardColors.white1};
  position: relative;
  z-index: 10;
`;

const MainSectionOneHeadlineStyled = styled(MainSectionOneHeadline)`
  width: 85%;
`;

const MainSectionOneAboutStyled = styled(MainSectionOneAbout)`
  width: 85%;
`;

export {
  MainSectionOneStyled,
  MainSectionOneHeadlineStyled,
  MainSectionOneAboutStyled,
};
