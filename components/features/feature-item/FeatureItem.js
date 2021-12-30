import React from "react";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import classes from "./FeatureItem.module.css";

function FeatureItem(props) {
  return (
    <div className={classes.featureItem}>
      <FontAwesomeIcon icon={props.icon} className={classes.icon} />
      <div className={classes.featureItemDetails}>
        <h3>{props.title}</h3>
        <p> {props.children}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
