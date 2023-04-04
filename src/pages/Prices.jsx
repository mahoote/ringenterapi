import { PageLayout } from "../components/containers/pageLayout/pageLayout";
import { PricesSectionOne } from "../components/containers/pricesPage/section01/pricesSectionOne";
import data from "../assets/data.json";
import { Helmet } from "react-helmet";
import React from "react";

function Prices() {
  return (
    <PageLayout>
      <Helmet>
        <title>Priser - {data.websiteName}</title>
      </Helmet>
      <PricesSectionOne />
    </PageLayout>
  );
}

export default Prices;
