import { PageLayout } from "../components/containers/pageLayout/pageLayout";
import data from "../assets/data.json";
import { Helmet } from "react-helmet";
import React from "react";
import PricesSectionOneStyled from "../components/containers/pricesPage/section01/pricesSectionOne.style";

function Prices() {
  return (
    <PageLayout>
      <Helmet>
        <title>Priser - {data.websiteName}</title>
      </Helmet>
      <PricesSectionOneStyled />
      <div style={{ flex: "1" }}></div>
    </PageLayout>
  );
}

export default Prices;
