import React from "react";

const Button = ({ enterNewDate }) => {
  return (
    <div className="buttonDiv">
      <button className="btn" onClick={enterNewDate}>
        Enter
      </button>
    </div>
  );
};

export default Button;
