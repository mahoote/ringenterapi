import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import React from "react";
import { AboutSectionOne } from "../../components/containers/aboutPage/section01/aboutSectionOne";
import { AboutSectionTwoStyled } from "../../components/containers/aboutPage/section02/aboutSectionTwo.style";

function AboutPage() {
  return (
    <PageLayout>
      <AboutSectionOne />
      <AboutSectionTwoStyled className={"py-6"} />
    </PageLayout>
  );
}

export { AboutPage };
