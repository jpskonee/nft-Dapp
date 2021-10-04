import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
              <h4 style={{color: "grey"}}>Connect Now</h4>
              <h2 style={{color: "white"}}>Get Regular Updates and Offer!</h2>
              <p style={{color: "grey"}}>
                In depth product info, roadmap, collaborations, pre sale date
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-3 mobile-pb-30">
            <Link to="/contact">
              <Button size="large" variant="contained" style={{color: "white", background: "blue", border: "1px white solid"}} >
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
