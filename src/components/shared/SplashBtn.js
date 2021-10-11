import React from "react";

function SplashBtn({
  text,
  textColor,
  align,
  color1,
  color2,
  active,
  name,
  onClick,
}) {
  //handling btn size
  let width = "100%";
  let padding = "0.3rem 0.7rem";
  let background = "#070B1A";

  if (align === "left") {
    width = "130px";
    padding = "0.3rem 0.3rem 0.3rem 1rem";
  }

  if (active === name) {
    background = `linear-gradient(80deg, ${color1} 40%, ${color2})`;
  }

  return (
    <div
      className="splash-btn"
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        minWidth: width,
      }}
    >
      <button
        className="splash-btn-inner"
        name={name}
        style={{
          //
          textAlign: align,
          color: textColor,
          padding: padding,
          background: background,
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default SplashBtn;
