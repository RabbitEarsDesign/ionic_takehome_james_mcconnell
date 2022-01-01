import React, { useState } from "react";
import Link from "next/link";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// COMPONENTS
import FooterLink from "./footer-link/FooterLink";
import FooterForm from "./footer-form/FooterForm";

// CSS
import classes from "./Footer.module.css";

function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <ul>
          <li>Solutions</li>
          <FooterLink href="/solutions/screenshare">Screen Sharing</FooterLink>
          <FooterLink href="/solutions/marketing">Marketing</FooterLink>
          <FooterLink href="/solutions/commerce">Commerce</FooterLink>
          <FooterLink href="/solutions/insights">Insights</FooterLink>
        </ul>
        <ul>
          <li>Resources</li>
          <FooterLink href="/resources/pricing">Pricing</FooterLink>
          <FooterLink href="/resources/documentation">Documentation</FooterLink>
          <FooterLink href="/resources/guides">Guides</FooterLink>
          <FooterLink href="/resources/apistatus">API Status</FooterLink>
        </ul>
        <ul>
          <li>Company</li>
          <FooterLink href="/company/about">About</FooterLink>
          <FooterLink href="/company/blog">Blog</FooterLink>
          <FooterLink href="/company/jobs">Jobs</FooterLink>
          <FooterLink href="/company/press">Press</FooterLink>
        </ul>
        <ul>
          <li>Help</li>
          <FooterLink href="/help/support">Support</FooterLink>
          <FooterLink href="/help/training">Training</FooterLink>
          <FooterLink href="/help/tutorials">Tutorials</FooterLink>
        </ul>
        <div className={classes.footerDetails}>
          <h3>Subscribe to our newsletter</h3>
          <p>
            Get the latest news, articles, and resources, sent to your inbox
            every week.
          </p>
          <FooterForm setFormSubmitted={setFormSubmitted} />
          {formSubmitted && (
            <p className={classes.success}>Thank you for submitting!</p>
          )}
        </div>
      </div>
      <div className={classes.footerBottom}>
        <div>
          <span dangerouslySetInnerHTML={{ __html: "&copy; " }} />
          2020 Acme, Inc. All rights reserved
        </div>
        <div className={classes.footerSocials}>
          <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          <FontAwesomeIcon icon={faTwitter} className={classes.icon} />
          <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
