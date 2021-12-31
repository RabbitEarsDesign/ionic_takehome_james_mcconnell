import React from "react";
import hero from "./image.png";

// HOOKS
import useWindowDimensions from "../../../hooks/use-window-dimensions";

// COMPONENTS
import Nav from "./nav/Nav";
import Copy from "./copy/Copy";
import Image from "./img/Image";
import Hamburger from "../../ui/hamburger/Hamburger";
import Logo from "../../ui/logo/Logo";

// CSS
import classes from "./Header.module.css";

function Header() {
  const { height, width } = useWindowDimensions();

  const nav =
    width >= 800 ? (
      <Nav />
    ) : (
      <div className={classes.mobileNav}>
        <Logo />
        <Hamburger />
      </div>
    );

  return (
    <header className={classes.header}>
      {nav}
      {/* <Nav /> */}

      <div className={classes.flex}>
        <Copy />
        <Image src={hero} />
      </div>
    </header>
  );
}

export default Header;
