import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function ColourBtn({ width, text, icon, textColor, mt, color1, color2 }) {
  return (
    <div
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        color: textColor,
        minWidth: width,
      }}
      className="colour-btn"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        {icon} {text}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowForwardIcon />
      </div>
    </div>
  );
}

export default ColourBtn;
