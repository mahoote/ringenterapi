import styled from "styled-components";
import { device } from "../../../../sizes/screenSize.style";

const Container = styled("div")`
  margin: 0 8rem;

  @media screen and ${device.tabletMax} {
    margin: 0 2rem;
  }
`;

export { Container };
