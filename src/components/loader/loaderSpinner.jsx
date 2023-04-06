import React from "react";

function LoaderSpinner(props) {
  return (
    <div className="loader-wrapper">
      <div className={"loader is-loading " + props.size}></div>
    </div>
  );
}

export default LoaderSpinner;
