import React from "react";
// COMPONENTS
import Button from "../../../ui/button/Button";
// CSS
import classes from "./Copy.module.css";
function Copy() {
  return (
    <div className={classes.copy}>
      <div className={classes.copyInner}>
        <h1>Your best work.</h1>
        <h1>Done together.</h1>
        <p>
          Build a better business, faster. Start sharing your work across your
          company-in real time.
        </p>
        <div className={classes.actions}>
          <Button primary={true}>Try it free</Button>
          <Button primary={false}>Download</Button>
        </div>
      </div>
    </div>
  );
}

export default Copy;
