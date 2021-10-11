import React from "react";

const HeaderText = ({ text, color, align }) => {
  return (
    <div>
      <div style={{ color: color, textAlign: align }} className="header-text">
        {text}
      </div>
    </div>
  );
};

export default HeaderText;
