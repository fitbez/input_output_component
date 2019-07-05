import React from "react";

const Userinput = props => {
  const inputStyle = {
    border: "2px solid red"
  };
  return (
    <div className="UserInput">
      <input
        type="text"
        style={inputStyle}
        onFocus={props.focus}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default Userinput;
