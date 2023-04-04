import React from "react";
import { NavbarLinkStyled } from "../header/header.style";
import { TextStyled } from "../text/text.style";
import { ButtonStyled } from "../button/button.style";

function MenuItem(props) {
  const type = props.item.type;

  if (type === "text") {
    return (
      <li className={"my-3"}>
        <NavbarLinkStyled
          pageLink={props.item.pageLink}
          content={<TextStyled text={props.item.name} size={3} />}
        />
      </li>
    );
  } else if (type === "button") {
    return (
      <li className={"mt-6 pt-6"}>
        <NavbarLinkStyled
          pageLink={props.item.pageLink}
          content={
            <ButtonStyled
              text={props.item.name}
              borderWidth={"3px"}
              textSize={3}
              paddingSize={2}
            />
          }
        />
      </li>
    );
  }
}

function MobileMenu(props) {
  return (
    <div className={props.className}>
      <ul>
        {props.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export { MobileMenu };
