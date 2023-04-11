import React from "react";

function InputControl(props) {
  return (
    <div className="flex flex-col m-4">
      {props.label && <label 
      className="font-bold">{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;