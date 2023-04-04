import styled from "styled-components";
import { Grid } from "./grid";

const GridStyled = styled(Grid)`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export { GridStyled };
