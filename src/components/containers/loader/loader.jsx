import React, { useEffect, useRef, useState } from "react";
import { LoaderContentStyled } from "./loader.style";
import { useGetScreenDistance } from "../../../hooks/screenDetection";

function LoaderContent(props) {
  const { className, content, rf } = props;

  return (
    <div className={className} ref={rf}>
      {content}
    </div>
  );
}

function Loader(props) {
  const showThreshold = 150;
  const [divShown, setDivShown] = useState(false);

  const ref = useRef();
  const { topStart, topEnd } = useGetScreenDistance(ref);

  useEffect(() => {
    if (topEnd > showThreshold && !divShown) {
      setDivShown(true);
    }
  }, [topStart, topEnd]);

  return (
    <LoaderContentStyled
      className={props.className}
      rf={ref}
      divShown={divShown}
      content={props.content}
    />
  );
}

export { Loader, LoaderContent };
