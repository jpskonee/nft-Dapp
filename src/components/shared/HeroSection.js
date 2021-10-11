import { Container } from "@material-ui/core";
import ColourBtn from "./ColourBtn";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <Container style={{ padding: "0" }} maxWidth="lg">
        <div className="top-div">
          <div className="logo-div">
            <img src="/images/logo.png" alt="logo" className="logo-img" />
          </div>
          <div className="connect-div">
            <div className="hero-connect">
              <img
                src="/images/connect-btn.png"
                alt="logo"
                className="connect-img"
              />
              <p> Connect Wallet</p>
            </div>
          </div>
        </div>

        <div className="bottom-div">
          <div>
            <div className="hero-text">Going live in</div>

            <div className="banner-btn-div">
              <ColourBtn
                text="Mint Cookie"
                textColor="white"
                color1="#7540d0"
                color2="#338889"
              />
            </div>
          </div>
          <div className="hero-box">
            <img alt="Hero-brick" src="/images/headerBox.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
