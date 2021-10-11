import React from "react";
import { Container, Grid } from "@material-ui/core";
import HeaderText from "../shared/HeaderText";
import TeamCard from "../shared/TeamCard";
import FaqSection from "../shared/FaqSection";

const FreqAskedQuest = () => {
  return (
    <Container className="team-faq" maxWidth="lg">
      <Grid container>
        <Grid item md={6} xs={12} className="team-div">
          <HeaderText text="Team" color="white" align="left" />
          <div className="each-team">
            <TeamCard
              color1="#AE46A9"
              color2="#842CE0"
              img="images/nft1.png"
              name="CookieKing"
            />
          </div>
          <div className="each-team img-right">
            <TeamCard
              color1="#45AD4A"
              color2="#78C843"
              img="images/nft2.png"
              name="Fortune Teller"
            />
          </div>
          <div className="each-team">
            <TeamCard
              color1="#FFCD57"
              color2="#EBAF59"
              img="images/nft4.png"
              name="Cookie Master"
            />
          </div>
          <div className="each-team img-right">
            <TeamCard
              color1="#5299BB"
              color2="#3ABAAB"
              img="images/nft3.png"
              name="Soltars Assistant"
            />
          </div>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={5} xs={12} className="faq-div">
          <HeaderText
            className="faq-header"
            text="FAQ"
            color="white"
            align="left"
          />
          <FaqSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FreqAskedQuest;
