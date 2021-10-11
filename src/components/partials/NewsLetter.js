import React from "react";
import { Link } from "react-router-dom";
import ColourHeaderText from "../shared/ColourHeaderText";
import ColourTag from "../shared/ColourTag";

const NewsLetter = () => {
  return (
    <div class="newsletter-container">
      <div class="container">
        <div class="row align-items-center pt-70 mobile-pt-60 mobile-pb-30">
          <div class="col-sm-12 col-md-9 mobile-pb-30">
            <div
              class="newsletter-text text-white wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h4 style={{ color: "grey" }}>Connect Now</h4>
              <ColourHeaderText text="Get Regular Updates and Offer!" />
              <p style={{ color: "grey" }}>
                In depth product info, roadmap, collaborations, pre sale date
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 mobile-pb-30">
            <Link to="/contact">
              <ColourTag color1="#131DF4" color2="#FF006A" text="Join Now!!!" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
