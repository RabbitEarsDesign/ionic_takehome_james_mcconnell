import React, { useRef, useState } from "react";

// COMPONENTS
import Button from "../../../ui/button/Button";

// CSS
import classes from "./FooterForm.module.css";

function FooterForm(props) {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() !== "") {
      props.setFormSubmitted(true);

      // @todo send a POST req to a databse with email info
      console.log(inputRef.current.value);
      inputRef.current.value = "";
      setTimeout(() => {
        props.setFormSubmitted(false);
      }, 2000);
    }
  };

  return (
    <form className={classes.footerForm} onSubmit={submitHandler}>
      <input type="email" placeholder="Email" ref={inputRef} />
      <Button primary={true}>Subscribe</Button>
    </form>
  );
}

export default FooterForm;
