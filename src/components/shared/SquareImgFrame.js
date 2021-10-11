import React from "react";

function SquareImgFrame({ img, attr, cat, name, props, state }) {
  return (
    <div className="img-card">
      <div className={state === "active" ? "img-active" : "img-passive"}>
        <img src={`/images/nft${img}.png`} alt="" />
      </div>
      <div className="img-detail1">
        <div>{attr}</div>
        <div>{cat}</div>
      </div>
      <div className="img-detail2">
        <div> {name}</div>
        <div className="img-detail-prop">{props}</div>
      </div>
    </div>
  );
}

export default SquareImgFrame;
