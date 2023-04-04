import React, { useState } from "react";
import { ImageStyled } from "../image/image.style";

function BorderImage(props) {
  const { className, ...other } = props;
  const [offsetHeight, setOffsetHeight] = useState();
  const [offsetWidth, setOffsetWidth] = useState();

  const onImgLoad = ({ target: img }) => {
    setOffsetHeight(img.offsetHeight);
    setOffsetWidth(img.offsetWidth);
  };

  const inlineStyle = {
    height: offsetHeight,
    width: offsetWidth,
  };

  return (
    <div className={props.className} style={inlineStyle}>
      <ImageStyled
        {...other}
        onImgLoad={onImgLoad}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export { BorderImage };
