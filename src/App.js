import React, { Component } from "react";
import "./App.css";
import Userinput from "./Userinputs/Userinput";
import UserOutput from "./UserOutputs/UserOutput";

class App extends Component {
  state = {
    username: "Beza Aklilu"
  };

  switchNameHandler = newName => {
    this.setState({
      username: newName
    });
  };

  nameChangedHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Userinput
          focus={this.switchNameHandler.bind(this, "Solomon Teshome")}
          changed={this.nameChangedHandler}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}
export default App;
