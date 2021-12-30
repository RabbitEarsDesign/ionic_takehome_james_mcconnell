import React from "react";
import Link from "next/link";

// CSS
import classes from "./NavItem.module.css";

function NavItem(props) {
  return (
    <li className={classes.navItem}>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default NavItem;
