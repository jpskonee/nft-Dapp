import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div class="newsletter-container">
      <div class="container">
        <div class="row align-items-center pt-110 pb-110 mobile-pt-60 mobile-pb-60">
          <div class="col-sm-12 col-md-9 mobile-pb-30">
            <div
              class="newsletter-text text-white wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h4>Connect Now</h4>
              <h2>Get Regular Updates and Offer!</h2>
              <p>
                In depth product info, roadmap, collaborations, pre sale date
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 mobile-pb-30">
            <Link to="/contact">
              <Button size="large" variant="contained" color="primary">
                {" "}
                Join Now{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
