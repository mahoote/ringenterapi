import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ServicesSectionOne } from "../../components/containers/servicesPage/section01/servicesSectionOne";
import { ServicesSectionTwo } from "../../components/containers/servicesPage/section02/servicesSectionTwo";

function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <div className={"mb-6"} />
    </PageLayout>
  );
}

export { ServicesPage };
