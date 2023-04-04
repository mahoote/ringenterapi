import React from "react";

function Grid(props) {
  return <div className={props.className}>{props.children}</div>;
}

export { Grid };
