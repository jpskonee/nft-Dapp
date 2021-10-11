import React, { useState } from "react";
import SquareImgFrame from "./SquareImgFrame";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import nft from "../../doc/nftDetails";

const ImageSlider = () => {
  const [img, setImg] = useState(1);

  const handleSlide = (dir, index) => {
    if (dir === "next" && index < 4) {
      setImg(index + 1);
    } else if (dir === "prev" && index > 1) {
      setImg(index - 1);
    } else if (dir === "next" && index >= 4) {
      setImg(1);
    } else if (dir === "prev" && index <= 1) {
      setImg(4);
    }
  };

  return (
    <div className="slider-cont">
      <div className="passive-div">
        <SquareImgFrame img={img - 1 < 1 ? 4 : img - 1} state="passive" />
        <SquareImgFrame img={img + 1 > 4 ? 1 : img + 1} state="passive" />
      </div>
      <div className="active-div">
        <SquareImgFrame
          img={img}
          attr="Eyewear"
          cat="Common"
          name="Laser Eyes"
          props="8.55% have this trait"
          state="active"
        />
      </div>
      <div className="img-ctr-div">
        <div
          onClick={() => {
            handleSlide("prev", img);
          }}
        >
          <ArrowBackIcon name="prev" className="img-ctr" />
        </div>
        <div
          onClick={() => {
            handleSlide("next", img);
          }}
        >
          <ArrowForwardIcon name="next" className="img-ctr" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
