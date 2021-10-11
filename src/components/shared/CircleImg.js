import React from "react";

function CircleImg({ img }) {
  return (
    <div>
      <img className="circle-img" src={`/${img}`} alt="pics" />
    </div>
  );
}

export default CircleImg;
