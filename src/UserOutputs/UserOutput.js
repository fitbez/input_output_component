import React from "react";
import "./UserOut.css";

const UserOutput = props => {
  return (
    <div className="UserOutPut">
      <p onClick={props.click}>My name is {props.username}.</p>
      <p>React is an awesome UI library.</p>
    </div>
  );
};

export default UserOutput;
