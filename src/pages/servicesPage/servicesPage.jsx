import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ServicesSectionOne } from "../../components/containers/servicesPage/section01/servicesSectionOne";
import { ServicesSectionTwo } from "../../components/containers/servicesPage/section02/servicesSectionTwo";
import data from "../../assets/data.json";
import { Helmet } from "react-helmet";

function ServicesPage() {
  return (
    <PageLayout>
      <Helmet>
        <title>Tjenester - {data.websiteName}</title>
      </Helmet>
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <div className={"mb-6"} />
    </PageLayout>
  );
}

export { ServicesPage };
