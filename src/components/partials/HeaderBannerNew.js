import React from "react";

const HeaderBannerNew = () => {
  return (
    <div class="banner-container banner3">
      <div class="container">
        <div class="row banner-content-area justify-content-between align-items-center">
          <div class="col-12 col-md-6 col-lg-6 banner-content">
            <div
              class="banner-cont-info text-white wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h1 class="text-white">
                UniCrypt is the next Crypto Currency and blockchain leader
              </h1>
              <p class="text-white">
                Sed sollicitudin arcu urna, sit amet pellentesque massa con
                sequat faucibus. Quisque posuere venenatis cursus.
              </p>
              <a class="unc-btn text-white" href="#">
                Read More
              </a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 mobile-pt-50 d-flex flex-wrap justify-content-lg-end banner-right">
            <div
              class="token-sale wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.7s"
            >
              <h5 class="text-white text-center">UniCrypt Token</h5>
              <h2 class="text-white text-center">Pre Sale Ends in</h2>
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
                  <strong>100,000,000</strong>
                </div>
                <div class="current-bonus">
                  <small>Current Bonus</small>
                  <strong>25%</strong>
                </div>
              </div>
              <div class="progressbar-area">
                <div class=" d-flex flex-wrap justify-content-between">
                  <div>
                    <small>$1000000</small>
                  </div>
                  <div>
                    <small>$100,000,000</small>
                  </div>
                </div>
                <div id="progressbar"></div>
              </div>
              <div class="current-bonus-area text-white d-flex flex-wrap justify-content-between pb-10">
                <div class="total-token">
                  <small>Softcap ends in 10 days</small>
                </div>
                <div class="current-bonus">
                  <small>Hard cap</small>
                </div>
              </div>
              <a class="unc-btn text-white" href="#">
                Join & Buy Now
              </a>
            </div>
          </div>
        </div>
        <a class="btn-scroll skip_swing" href="#section0">
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default HeaderBannerNew;
