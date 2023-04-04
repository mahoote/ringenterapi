import { GridStyled } from "../../grids/grid.style";
import { GlobalStyle } from "../../globals/global.style";
import { HeaderStyled } from "../../header/header.style";
import { FooterStyled } from "../../footer/footer.style";
import React from "react";

function PageLayout(props) {
  return (
    <>
      <GlobalStyle />
      <GridStyled className={props.className}>
        <HeaderStyled />
        <div>{props.children}</div>
        <FooterStyled />
      </GridStyled>
    </>
  );
}

export { PageLayout };
