import React from "react";
// CSS
import classes from "./Button.module.css";

function Button(props) {
  function clickHandler() {
    console.log("Clicked but we could do more!");
  }

  const styles = props.primary
    ? `${classes.btn}`
    : `${classes.btn} ${classes.secondary}`;

  return (
    <button className={styles} onClick={clickHandler}>
      {props.children}
    </button>
  );
}

export default Button;
