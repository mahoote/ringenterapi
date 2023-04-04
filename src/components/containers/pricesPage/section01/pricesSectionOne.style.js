import styled from "styled-components";
import { PricesSectionOne } from "./pricesSectionOne";
import { device } from "../../../../sizes/screenSize.style";

const PricesSectionOneStyled = styled(PricesSectionOne)`
  margin-bottom: 2rem;
  @media screen and ${device.tabletMax} {
    width: 85%;
  }
`;

export default PricesSectionOneStyled;
