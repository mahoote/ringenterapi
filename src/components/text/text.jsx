import React from "react";
import { useTextWeight } from "../../hooks/text";
import {
  HrefLinkStyled,
  TextContentSpanStyled,
  TextLinkStyled,
} from "./text.style";
import { Link } from "react-router-dom";

function TextContentSpan(props) {
  const textWeight = useTextWeight(props.highlightTextWeight);
  return <span className={props.className + textWeight}>{props.content}</span>;
}

function TextHighlight(props) {
  const highlightPosStart = props.highlightPosStart;
  const highlightPosEnd = props.highlightPosEnd;
  const words = props.text.split(" ");

  const beforeArray = words.slice(0, highlightPosStart);
  const spanArray = words.slice(highlightPosStart, highlightPosEnd + 1);
  const afterArray = words.slice(highlightPosEnd + 1);

  return (
    <>
      {beforeArray.join(" ")}
      <TextContentSpanStyled
        {...props}
        className={""}
        content={" " + spanArray.join(" ") + " "}
      />
      {afterArray.join(" ")}
    </>
  );
}

function TextLink(props) {
  const { className, to } = props;

  if (to.toString().startsWith("http") || to.toString().startsWith("www")) {
    return (
      <HrefLinkStyled href={to} target={"_blank"} className={className}>
        {props.TextContent}
      </HrefLinkStyled>
    );
  }

  return (
    <Link to={to} className={className}>
      {props.TextContent}
    </Link>
  );
}

function Text(props) {
  const size = props.size;
  const sizeDesktop = props.sizeDesktop;
  const sizeTouch = props.sizeTouch;
  const sizeTablet = props.sizeTablet;
  const sizeMobile = props.sizeMobile;

  const sizeClass = ` is-size-${size} `;
  const sizeDesktopClass =
    sizeDesktop !== undefined ? ` is-size-${sizeDesktop}-desktop ` : "";
  const sizeTouchClass =
    sizeTouch !== undefined ? ` is-size-${sizeTouch}-touch ` : "";
  const sizeTabletClass =
    sizeTablet !== undefined ? ` is-size-${sizeTablet}-tablet ` : "";
  const sizeMobileClass =
    sizeMobile !== undefined ? ` is-size-${sizeMobile}-mobile ` : "";

  const textWeight = useTextWeight(props.textWeight);

  const highlightPosStart = props.highlightPosStart - 1;
  const highlightPosEnd = props.highlightPosEnd - 1;

  const hasHighlight =
    !isNaN(highlightPosStart) &&
    !isNaN(highlightPosEnd) &&
    highlightPosStart !== -1 &&
    highlightPosEnd !== -1;

  const linkTo = props.linkTo || null;

  function TextContent() {
    const texts = props.text.split("\n");

    return hasHighlight ? (
      <TextHighlight
        {...props}
        className={""}
        highlightPosStart={highlightPosStart}
        highlightPosEnd={highlightPosEnd}
      />
    ) : (
      texts.map((text, i) => (
        <span key={i}>
          <p>
            {text}
            <br />
          </p>
        </span>
      ))
    );
  }

  return (
    <div
      className={
        props.className +
        sizeClass +
        sizeDesktopClass +
        sizeTouchClass +
        sizeTabletClass +
        sizeMobileClass +
        textWeight
      }
    >
      {linkTo ? (
        <TextLinkStyled
          to={linkTo}
          TextContent={<TextContent />}
          textWeight={props.textWeight}
        />
      ) : (
        <TextContent />
      )}
    </div>
  );
}

export { Text, TextContentSpan, TextLink };
