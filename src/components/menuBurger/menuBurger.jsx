import React, { useEffect, useState } from "react";

/*
   Code from https://www.sliderrevolution.com/resources/css-hamburger-menu/
   See menuBurger.css for styling.
*/

function MenuBurger(props) {
  const [showMenu, setShowMenu] = useState(props.showMenu);

  useEffect(() => {
    setShowMenu(!props.showMenu);
    const ham = document.querySelector("#nav-ham");

    if (showMenu) {
      ham.classList.add("active");
    } else {
      ham.classList.remove("active");
    }
  }, [props.showMenu]);

  function handleClick() {
    props.onClick();
  }

  return (
    <div className={props.className + " navbar-burger "}>
      <svg
        id={"nav-ham"}
        className="ham hamRotate ham8"
        viewBox="0 0 100 100"
        width="52"
        onClick={handleClick}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </div>
  );
}

export { MenuBurger };
