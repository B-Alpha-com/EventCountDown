import React from "react";
import "./index.css";

const NavBar = ({
  handleNameChange,
  value,
  handleOccassionChange,
  valueOccassion,
  handleKeyPress,
  handleSubmit,
  handleSubmitName,
}) => {
  return (
    <div className="navBar">
      <nav className="first">
        <ul className="unordered">
          <li className="h1"> KnowYourTime</li>
          <li className="text">
            <label for="input">Enter your name:</label>
            <input
              className="input1"
              name="input"
              type="text"
              placeholder="your name"
              onChange={handleNameChange}
              onKeyPress={handleNameChange}
              value={value}
            />
            <button onClick={handleSubmitName} type="submit" className="btn1">
              Submit
            </button>
          </li>
          <li className="occasion">
            <label for="input2">Occassion:</label>
            <input
              className="input2"
              name="input2"
              type="text"
              onChange={handleOccassionChange}
              onKeyPress={handleKeyPress}
              value={valueOccassion}
            />
            <button type="submit" className="btn2" onClick={handleSubmit}>
              Submit
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
