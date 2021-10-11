import React, { useState } from "react";
import VideoModal from "../partials/VideoModal";
import ReactTypingEffect from "react-typing-effect";
import ColourTag from "../shared/ColourTag";
import { Link } from "react-router-dom";

function HeadBanner() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div class="mb-20">
      <div id="topTop"></div>
      <section id="hero">
        <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <h1 class="mb-4 pb-0">
            THE <ReactTypingEffect text={["FIRST", "RARE", "BEST"]} /> PHYSICAL
            <br />
            NFT KEYCHAIN
          </h1>
          <p style={{ color: "gray" }} class="mb-4 pb-0">
            Display your favorite NFT, advertise the next BIG project, share
            emergency documents
          </p>
          <a
            href="#here"
            onClick={() => {
              setOpen(!isOpen);
            }}
            class="glightbox play-btn mb-4"
          >
            {" "}
          </a>
          <Link to="/app">
            {/* <a href="/" class="about-btn scrollto">
              BUY NOW
            </a> */}

            <ColourTag color1="#131DF4" color2="#FF006A" text=" BUY NOW" />
          </Link>
          <div id="toShop"></div>
        </div>
      </section>
      {isOpen && <VideoModal />}
    </div>
  );
}

export default HeadBanner;
