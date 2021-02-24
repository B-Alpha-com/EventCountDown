import React from "react";
import "./index.css";

const NavBar = ({
  handleNameChange,
  value,
  handleOccassionChange,
  valueOccassion,
  handleKeyPress,
}) => {
  return (
    <div className="navBar">
      <nav className="first">
        <ul className="unordered">
          <li className="h1"> KnowYourTime</li>
          <li className="text">
            Enter your name:
            <input
              className="input1"
              type="text"
              placeholder="your name"
              onChange={handleNameChange}
              onKeyPress={handleNameChange}
              value={value}
            />
          </li>
          <li className="occasion">
            Occassion:
            <input
              className="input2"
              type="text"
              onChange={handleOccassionChange}
              onKeyPress={handleKeyPress}
              value={valueOccassion}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
