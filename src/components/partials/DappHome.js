import React from "react";
import TestDapp from "../TestDapp";
import NftGallery from "./NftGallery";
import BenefitSection from "./BenefitSection";
import FreqAskedQuestionNew from "./FreqAskedQuestionNew";

function DappHome() {
  return (
    <div style={{ marginTop: "8rem" }}>
      <TestDapp />
      <NftGallery />
      <BenefitSection />
      <FreqAskedQuestionNew />
    </div>
  );
}

export default DappHome;
