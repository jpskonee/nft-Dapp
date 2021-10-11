import React from "react";
import eth from "../../assets/images/eth.svg";

const CountDownClock = () => {
  return (
    <div
      class="token-sale wow fadeInRight"
      data-wow-duration="1s"
      data-wow-delay="0.7s"
      style={{ marginTop: "2rem" }}
    >
      <h2 style={{ fontSize: "2rem" }} class="text-white text-center">
        Pre Sale Ends in
      </h2>
      <div
        id="clock3"
        class="d-flex flex-wrap justify-content-center pt-20 pb-40"
      >
        <div class="clockdiv_column">
          <div class="clocktimes">
            <span id="days"></span>
            <small>Days</small>
          </div>
        </div>
        <div class="clockdiv_column">
          <div class="clocktimes">
            <span id="hours"></span>
            <small>Hours</small>
          </div>
        </div>
        <div class="clockdiv_column">
          <div class="clocktimes">
            <span id="mins"></span>
            <small>Mins</small>
          </div>
        </div>
        <div class="clockdiv_column">
          <div class="clocktimes">
            <span id="secs"></span>
            <small>Secs</small>
          </div>
        </div>
      </div>

      <div class="current-bonus-area text-white d-flex flex-wrap justify-content-between pb-10">
        <div class="total-token">
          <small>Total Token</small>
          <strong>5,555</strong>
        </div>
        <div class="current-bonus">
          <small>Current Price</small>
          <div
            style={{
              display: "flex",
              jusitfyContents: "space-evenly",
              alignItems: "center",
              marginTop: "0.1rem",
            }}
          >
            <img
              style={{ width: "1rem", marginRight: "0.5rem" }}
              alt="eth icon"
              src={eth}
            />
            <div className="mint-current-price-fee"> 0.08 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownClock;
