import { Container } from "@material-ui/core";
import React from "react";
import img from "../../assets/images/icon-n.png";

const BenefitSection = () => {
  return (
    <div class="benefits-container overflow-hidden">
      <div class="container">
        <Container maxWidth="lg">
          <div class="row pt-110 mobile-pt-60">
            <div
              class="col-12 big-title white-text text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h3>How You Get Benefited</h3>
              <h2>Benefits of Artifact Keychain</h2>
            </div>
          </div>
          <div class="row justify-content-between benefits-content pt-40 pb-80 mobile-pt-10 mobile-pb-40">
            <div
              class="col-12 col-md-6 benefits-left wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <img src={img} alt="" width="436" height="364" />
            </div>
            <div
              class="col-12 col-md-6 benefits-right wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".7s"
            >
              <div class="benefits-cont">
                <div class="bnf-area pt-50 mobile-mt-0">
                  <div class="bnf-col-row pb-20 mobile-pb-10">
                    <div class="bnf-col-img">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="bnf-col-cont">
                      <p>
                        NFT casting (JPEG, GIF, MP4); 6 Hours batery life WIFI
                        and bluetooth enabled secured wallet verification;
                        Keychain password protected; Secired link to
                        advertiser's account.
                      </p>
                    </div>
                  </div>
                  <div class="bnf-col-row pb-20 mobile-pb-10">
                    <div class="bnf-col-img">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="bnf-col-cont">
                      <p>
                        Safely upload personal health or emergency documents
                        that can be shown when your QR code on the back of your
                        device is scanned.
                      </p>
                    </div>
                  </div>
                  <div class="bnf-col-row pb-20 mobile-pb-10">
                    <div class="bnf-col-img">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="bnf-col-cont">
                      <p>
                        We know that NFTs are the future for art project
                        marketing, business branding, and the intersection
                        between art and finance.
                      </p>
                    </div>
                  </div>
                  <div class="bnf-col-row pb-20 mobile-pb-10">
                    <div class="bnf-col-img">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="bnf-col-cont">
                      <p>
                        We truly believe that the Artifact Marketplace will
                        enable contact with other members in the NFT space not
                        only within the virtual space, but also out in the
                        community and even bring more people in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BenefitSection;
