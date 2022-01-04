import React from "react";

// FONTAWESOME
import {
  faClock,
  faRocket,
  faCloud,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import FeatureItem from "./feature-item/FeatureItem";

// CSS
import classes from "./Features.module.css";

function Features() {
  return (
    <section className={classes.features}>
      <div className={classes.featureHeader}>
        <p>Features</p>
        <h2>A better way to work together</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum esse
          nesciunt perspiciatis voluptatum magnam sapiente! Atque!
        </p>
      </div>
      <div className={classes.featureItems}>
        <FeatureItem title="Communicate in realtime" icon={faCommentDots}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam
          ea sit adipisci! Excepturi culpa nulla illum eligendi, voluptatem
          ducimus!
        </FeatureItem>
        <FeatureItem title="Do your best work" icon={faRocket}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam
          ea sit adipisci! Excepturi culpa nulla illum eligendi, voluptatem
          ducimus!
        </FeatureItem>
        <FeatureItem title="Avoid costly revisions" icon={faClock}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam
          ea sit adipisci! Excepturi culpa nulla illum eligendi, voluptatem
          ducimus!
        </FeatureItem>
        <FeatureItem title="Everything in one place" icon={faCloud}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam
          ea sit adipisci! Excepturi culpa nulla illum eligendi, voluptatem
          ducimus!
        </FeatureItem>
      </div>
    </section>
  );
}

export default Features;
