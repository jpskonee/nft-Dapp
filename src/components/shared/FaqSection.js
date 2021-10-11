import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "black",
    color: "white",
    marginTop: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
  },
  accordion: {
    background: "#01060C",
    color: "white",
    paddingTop: "0.5rem",
  },
  heading: {
    background: "#1A2C34",
    color: "white",
    borderRadius: "5rem",
    fontSize: "0.5rem",
  },
  summary: {
    background: "#1A2C34",
    color: "gray",
    borderRadius: "2rem",
    marginTop: "0rem",
    padding: "1rem 1.5rem",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.heading}
        >
          <Typography>How can I buy a fortune cookie?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            You can do so by clicking the mint button in our webpage
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.heading}
        >
          <Typography>When is the drop? How much?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            It is in October 16th. 4 PM EST. The price is 2 SOL
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.heading}
        >
          <Typography>Can I mint on my phone?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            It is very difficult and not recommended. Please use a
            desktop/laptop with Phantom/Solflare/Sollet
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.heading}
        >
          <Typography>Is there a limit?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Just one per Tx but that doesn’t mean you can do unlimited
            transactions. As long as there are cookies, you can mint.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className={classes.heading}
        >
          <Typography>How many traits are in the cookie box?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            There could be multiple traits in the cookie box or none at all if
            common. It all depends on luck!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel6" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className={classes.heading}
        >
          <Typography>Do you have a rarity system?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Yes. We have common, rare, extremely rare and mythic ranks across
            137 different traits.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel7" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          className={classes.heading}
        >
          <Typography>Will there be a secondary market?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>Yes. We’ll publish in the FTX NFT platform.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel8" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          className={classes.heading}
        >
          <Typography>Are there secondary sale royalties?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            5% Royalties are applied to every cookie sale.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel9" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel9bh-content"
          id="panel9bh-header"
          className={classes.heading}
        >
          <Typography>What can i do with my fortunes?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Fortune Cookies will be used to generate new NFT’s. There will be
            airdrops and minting functions based off gen0 Fortunes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
