import React from "react";
import { TextInputTagStyled } from "./textInput.style";

function TextInputTag(props) {
  return (
    <input
      className={props.className + " is-size-5-tablet is-size-6-mobile p-5 "}
      type={props.type}
      required={props.required}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

function TextInput(props) {
  return (
    <div className={props.className}>
      <TextInputTagStyled {...props} className={""} />
    </div>
  );
}

export { TextInput, TextInputTag };
