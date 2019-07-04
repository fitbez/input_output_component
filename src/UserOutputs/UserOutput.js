import React from "react";

const UserOutput = props => {
  return (
    <div>
      <p onClick={props.click}>My name is {props.username}.</p>
      <p>React is an awesome UI library.</p>
    </div>
  );
};

export default UserOutput;
