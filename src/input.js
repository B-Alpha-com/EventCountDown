import React from "react";

const Input = ({ handleNewDate }) => {
  return (
    <div className="inputDiv">
      <input className="port_1" type="date" onChange={handleNewDate} />;
    </div>
  );
};

export default Input;
