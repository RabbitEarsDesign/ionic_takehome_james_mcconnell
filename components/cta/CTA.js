import React from "react";

// COMPONENTS
import Button from "../ui/button/Button";

// CSS
import classes from "./CTA.module.css";

function CTA() {
  return (
    <section className={classes.cta}>
      <div>
        <h2>Ready to start?</h2>
        <h2>Sign up for free today.</h2>
      </div>
      <div>
        <Button primary={true}>Try it free</Button>
        <Button>Learn more</Button>
      </div>
    </section>
  );
}

export default CTA;
