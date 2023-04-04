import { GridStyled } from "../../grids/grid.style";
import { GlobalStyle } from "../../globals/global.style";
import { HeaderStyled } from "../../header/header.style";
import { FooterStyled } from "../../footer/footer.style";
import React from "react";

function PageLayout(props) {
  return (
    <GridStyled className={props.className}>
      <GlobalStyle />
      <HeaderStyled />
      <div>{props.children}</div>
      <FooterStyled />
    </GridStyled>
  );
}

export { PageLayout };
