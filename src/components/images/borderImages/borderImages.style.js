import styled from "styled-components";
import { BorderImages, BorderImagesBackground } from "./borderImages";

const BorderImagesStyled = styled(BorderImages)`
  text-align: center;
  width: 100%;
  position: relative;
`;

const BorderImagesBackgroundStyled = styled(BorderImagesBackground)`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  position: absolute;
  width: 100%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export { BorderImagesStyled, BorderImagesBackgroundStyled };
