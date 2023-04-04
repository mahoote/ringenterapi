import React from "react";
import { TextAreaInputTagStyled } from "./textAreaInput.style";
import TextareaAutosize from "react-textarea-autosize";

function TextAreaInputTag(props) {
  return (
    <TextareaAutosize
      minRows={4}
      className={props.className + " is-size-5-tablet is-size-6-mobile p-5 "}
      required={props.required}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

function TextAreaInput(props) {
  return (
    <div className={props.className + " my-4 "}>
      <TextAreaInputTagStyled {...props} className={""} />
    </div>
  );
}

export { TextAreaInput, TextAreaInputTag };
