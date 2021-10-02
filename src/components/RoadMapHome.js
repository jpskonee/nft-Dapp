import React from "react";
import RoadMap from "./partials/RoadMap";
import NftGallery from "./partials/NftGallery";
import BenefitSection from "./partials/BenefitSection";
import FreqAskedQuestionNew from "./partials/FreqAskedQuestionNew";

function DappHome() {
  return (
    <div style={{ marginTop: "3rem" }}>
      <RoadMap />
      <BenefitSection />
      <FreqAskedQuestionNew />
    </div>
  );
}

export default DappHome;
