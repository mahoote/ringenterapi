import React from "react";
import { ImageStyled } from "../image/image.style";
import { BorderImagesBackgroundStyled } from "./borderImages.style";

function BorderImagesBackground(props) {
  return <div className={props.className}></div>;
}

function BorderImages(props) {
  const { className, images, ...other } = props;

  return (
    <div className={className}>
      <BorderImagesBackgroundStyled {...other} />
      {images.map((image, i) => (
        <div key={i}>
          <ImageStyled
            {...other}
            src={image.src}
            alt={image.alt}
            width={image.width}
            widthMobile={image.widthMobile}
            offsetX={image.offsetX}
            offsetY={image.offsetY}
            offsetXMobile={image.offsetXMobile}
            offsetYMobile={image.offsetYMobile}
          />
        </div>
      ))}
    </div>
  );
}

export { BorderImages, BorderImagesBackground };
