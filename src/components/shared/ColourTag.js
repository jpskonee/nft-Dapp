import React from "react";

function ColourTag({ text, textColor, percent, percentColor, color1, color2 }) {
  return (
    <div
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
      }}
      className="colour-tag"
    >
      <div style={{ color: textColor }}>{text}</div>
      <div style={{ color: percentColor, marginLeft: "0.5rem" }}>{percent}</div>
    </div>
  );
}

export default ColourTag;
