import React from "react";
import "./Userinput.css";

const Userinput = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        onFocus={props.focus}
        onChange={props.changed}
        value={props.username}
      />
    </div>
  );
};

export default Userinput;
