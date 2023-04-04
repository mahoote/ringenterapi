import React from "react";
import { MainSectionOneStyled } from "../../components/containers/mainPage/section01/mainSectionOne.style";
import { MainSectionTwoStyled } from "../../components/containers/mainPage/section02/mainSectionTwo.style";
import { MainSectionThreeStyled } from "../../components/containers/mainPage/section03/mainSectionThree.style";
import { MainSectionFourStyled } from "../../components/containers/mainPage/section04/mainSectionFour.style";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";

function HomePage(props) {
  return (
    <PageLayout className={props.className}>
      <MainSectionOneStyled className={"py-4"} />
      <MainSectionTwoStyled />
      <MainSectionThreeStyled className={"py-6"} />
      <MainSectionFourStyled />
    </PageLayout>
  );
}

export { HomePage };
