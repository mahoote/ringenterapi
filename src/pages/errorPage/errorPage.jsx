import React from "react";
import { GlobalStyle } from "../../components/globals/global.style";
import { HeaderStyled } from "../../components/header/header.style";
import { GridStyled } from "../../components/grids/grid.style";
import { TextStyled } from "../../components/text/text.style";
import data from "../../assets/data.json";
import { Helmet } from "react-helmet";

function ErrorPage() {
  return (
    <GridStyled>
      <Helmet>
        <title>Error - {data.websiteName}</title>
      </Helmet>
      <GlobalStyle />
      <HeaderStyled />
      <div className={"has-text-centered my-6"}>
        <TextStyled text={"Oh no!"} size={2} textWeight={"semibold"} />
        <TextStyled text={"It seems like this page doesn't exist."} size={2} />
      </div>
    </GridStyled>
  );
}

export { ErrorPage };
