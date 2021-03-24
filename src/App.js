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
  handleSubmitName = (event) => {
    this.setState({ inputName: event.target.value });
    const inputName = this.state.inputName;
    this.setState({ realName: inputName });
    this.setState({ inputName: "" });
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
  handleSubmit = () => {
    this.setState({ realOccassion: this.state.inputOccassion });
    this.setState({ inputOccassion: "" });
  };

  handleClick = () => {
    this.setState({ updatedDate: this.state.newDate });
  };
  render() {
    const {
      handleNameChange,
      handleClick,
      handleOccassionChange,
      handleDateChange,
      handleKeyPress,
      handleNewDate,
      handleSubmit,
      handleSubmitName,
    } = this;
    const {
      inputName,
      inputOccassion,
      updatedDate,
      realName,
      realOccassion,
    } = this.state;
    return (
      <div className="App">
        <NavBar
          handleNameChange={handleNameChange}
          value={inputName}
          handleOccassionChange={handleOccassionChange}
          handleSubmit={handleSubmit}
          handleSubmitName={handleSubmitName}
          handleKeyPress={handleKeyPress}
          valueOccassion={inputOccassion}
        />
        <Calender
          updatedDate={updatedDate}
          inputNewName={realName}
          inputNewOccassion={realOccassion}
        />
        <Input handleNewDate={handleDateChange} />
        <Button enterNewDate={handleClick} />
      </div>
    );
  }
}

export default App;
