import React from "react";

function CircleImg({ img, name, color1, color2 }) {
  return (
    <div className="team-card">
      <img className="team-img" src={`/${img}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
    </div>
  );
}

export default CircleImg;
