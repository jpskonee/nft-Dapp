import React from "react";
import TestDapp from "../TestDapp";
import FreqAskedQuest from "./FreqAskedQuest";

function DappHome() {
  return (
    <div style={{ marginTop: "8rem" }}>
      <TestDapp />
      <FreqAskedQuest />
    </div>
  );
}

export default DappHome;
