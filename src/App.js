import React, { Component } from "react";
import "./App.css";
import Userinput from "./Userinputs/Userinput";
import UserOutput from "./UserOutputs/UserOutput";

class App extends Component {
  state = {
    username: "Fitsum Belayneh"
  };

  switchNameHandler = () => {
    this.setState({
      username: "Beza Akilu"
    });
  };
  render() {
    return (
      <div className="App">
        <Userinput username="Fitsum Belayneh" />
        <UserOutput name="Belayneh" />
      </div>
    );
  }
}
export default App;
