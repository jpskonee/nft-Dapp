import React from "react";
import HeadBanner from "./partials/HeadBanner";
import FreqAskedQuestionNew from "../components/partials/FreqAskedQuestionNew";
import FreqAskedQuest from "../components/partials/FreqAskedQuest";
import Dapp from "./TestDapp";
import NftGallery from "./partials/NftGallery";
import RoadMap from "./partials/RoadMap";
import HeaderBannerNew from "./partials/HeaderBannerNew";
import BenefitSection from "./partials/BenefitSection";
import NewsLetter from "./partials/NewsLetter";
import { Container } from "@material-ui/core";
import TestDapp from "./TestDapp";

const Homepage = () => {
  return (
    <div>
      <HeadBanner />
      {/* <HeaderBannerNew /> */}
      {/* <Dapp /> */}
      <TestDapp />
      <NftGallery />
      <BenefitSection />

      <RoadMap />

      <FreqAskedQuestionNew />

      <NewsLetter />

      {/* <FreqAskedQuest /> */}
    </div>
  );
};

export default Homepage;
