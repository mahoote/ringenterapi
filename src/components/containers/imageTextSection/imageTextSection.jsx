import React from "react";
import { size } from "../../../sizes/screenSize.style";
import { useResize } from "../../../hooks/screenDetection";
import { Loader } from "../loader/loader";
import { CenterStyled } from "../center/center.style";
import { useState } from "react";
import { BorderImagesStyled } from "../../images/borderImages/borderImages.style";
import { BorderImageStyled } from "../../images/borderImage/borderImage.style";
import { standardColors } from "../../../palettes/standardColors.style";

function CenteredLoader(props) {
  const { textIndex, images } = props;

  const columnSizeFull = 11;
  const columnSizeHalf = 5;

  const columnSize =
    images !== undefined
      ? images[textIndex] === undefined
        ? ` is-${columnSizeFull} px-5 `
        : ` is-${columnSizeHalf} `
      : ` is-${columnSizeHalf} `;

  return (
    <Loader
      className={columnSize + " column my-5 "}
      content={
        <div>
          <CenterStyled
            className={"is-hidden-mobile"}
            content={props.children}
          />
          <div className={"is-hidden-tablet mx-5"}>{props.children}</div>
        </div>
      }
    />
  );
}

function ImageTextSectionImages(props) {
  const { images } = props;

  return (
    <>
      {images.map((image, i) => {
        const backgroundColor = image.backgroundColor || standardColors.blue1;

        return (
          <CenteredLoader key={i}>
            <BorderImageStyled
              className={"my-5"}
              src={image.src}
              alt={image.alt}
              backgroundColor={backgroundColor}
              width={image.width}
              padding={"1em"}
              offsetY={image.offsetY}
              offsetX={image.offsetX}
            />
          </CenteredLoader>
        );
      })}
    </>
  );
}

function ImageTextSection(props) {
  const [isMobile, setIsMobile] = useState(false);
  const { images, borderImagesHeight } = props;
  const backgroundColor = images[0].backgroundColor || standardColors.blue1;

  function handleResize() {
    if (window.innerWidth >= size.tablet) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  useResize(handleResize);

  return (
    <div
      className={
        props.className + " columns is-centered is-vcentered is-multiline mb-0"
      }
    >
      <CenteredLoader>{props.textContentFirst}</CenteredLoader>

      {isMobile ? (
        <Loader
          className={" column is-12 my-6 "}
          content={
            <CenterStyled
              content={
                <BorderImagesStyled
                  className={" my-5 "}
                  images={images}
                  backgroundColor={backgroundColor}
                  height={borderImagesHeight}
                />
              }
            />
          }
        />
      ) : (
        <ImageTextSectionImages images={images} />
      )}

      <CenteredLoader textIndex={1} images={images}>
        {props.textContentSecond}
      </CenteredLoader>
    </div>
  );
}

export { ImageTextSection };
