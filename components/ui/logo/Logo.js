import React from "react";

// CSS
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.triangle}></div>
      <div className={classes.halfCircle}></div>
      <div className={`${classes.triangle} ${classes.triangleSmall}`}></div>
    </div>
  );
}

export default Logo;
