import { render } from "@testing-library/react";
import React, { Component } from "react";
import Calender from "./Calender";
import Input from "./input";
import Button from "./button";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      updatedDate: "",
      inputName: "",
      realName: "",
      inputOccassion: "",
      realOccassion: "",
    };
  }
  handleDateChange = (event) => {
    this.setState({ newDate: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ inputName: event.target.value });
    if (event.key === "Enter") {
      this.setState({ realName: this.state.inputName });
      this.setState({ inputName: "" });
    }
  };
  handleOccassionChange = (event) => {
    this.setState({ inputOccassion: event.target.value });
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.setState({ realOccassion: this.state.inputOccassion });
      this.setState({ inputOccassion: "" });
    }
  };

  handleClick = () => {
    this.setState({ updatedDate: this.state.newDate });
  };
  render() {
    return (
      <div className="App">
        <NavBar
          handleNameChange={this.handleNameChange}
          value={this.state.inputName}
          handleOccassionChange={this.handleOccassionChange}
          handleKeyPress={this.handleKeyPress}
          valueOccassion={this.state.inputOccassion}
        />
        <Calender
          updatedDate={this.state.updatedDate}
          inputNewName={this.state.realName}
          inputNewOccassion={this.state.realOccassion}
        />
        <Input handleNewDate={this.handleDateChange} />
        <Button enterNewDate={this.handleClick} />
      </div>
    );
  }
}

export default App;
