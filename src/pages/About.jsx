import { PageLayout } from "../components/containers/pageLayout/pageLayout";
import React from "react";
import { AboutSectionOne } from "../components/containers/aboutPage/section01/aboutSectionOne";
import { AboutSectionTwoStyled } from "../components/containers/aboutPage/section02/aboutSectionTwo.style";
import { Helmet } from "react-helmet";

import data from "../assets/data.json";

function About() {
  return (
    <PageLayout>
      <Helmet>
        <title>Om meg - {data.websiteName}</title>
      </Helmet>
      <AboutSectionOne />
      <AboutSectionTwoStyled className={"py-6"} />
    </PageLayout>
  );
}

export default About;
