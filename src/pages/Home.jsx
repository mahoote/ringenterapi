import React from "react";
import { MainSectionOneStyled } from "../components/containers/mainPage/section01/mainSectionOne.style";
import { MainSectionTwoStyled } from "../components/containers/mainPage/section02/mainSectionTwo.style";
import { MainSectionThreeStyled } from "../components/containers/mainPage/section03/mainSectionThree.style";
import { MainSectionFourStyled } from "../components/containers/mainPage/section04/mainSectionFour.style";
import { PageLayout } from "../components/containers/pageLayout/pageLayout";
import data from "../assets/data.json";
import { Helmet } from "react-helmet";

function Home(props) {
  return (
    <PageLayout className={props.className}>
      <Helmet>
        <title>{data.websiteName}</title>
      </Helmet>
      <MainSectionOneStyled className={"py-4"} />
      <MainSectionTwoStyled />
      <MainSectionThreeStyled className={"py-6"} />
      <MainSectionFourStyled />
    </PageLayout>
  );
}

export default Home;
