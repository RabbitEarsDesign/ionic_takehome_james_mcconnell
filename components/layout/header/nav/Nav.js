import React from "react";
import Link from "next/link";

// COMPONENTS
import Logo from "../../../ui/logo/Logo";
import NavItem from "./nav-item/NavItem";

// CSS
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <NavItem href="/">
          <Logo />
        </NavItem>
        <NavItem href="/product">Product</NavItem>
        <NavItem href="/features">Features</NavItem>
        <NavItem href="/enterprise">Enterprise</NavItem>
        <NavItem href="/company">Company</NavItem>
        <NavItem href="/">SignIn</NavItem>
        <NavItem href="#">Download</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
