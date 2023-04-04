import React from "react";

function Image(props) {
  return (
    <img
      className={props.className}
      onLoad={props.onImgLoad}
      src={props.src}
      alt={props.alt}
    />
  );
}

export { Image };
