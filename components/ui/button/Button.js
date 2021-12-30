import React from "react";
// CSS
import classes from "./Button.module.css";

function Button(props) {
  const styles = props.primary
    ? `${classes.btn}`
    : `${classes.btn} ${classes.secondary}`;

  return <button className={styles}>{props.children}</button>;
}

export default Button;
