import React from "react";
import Link from "next/link";

// CSS
import classes from "./Hamburger.module.css";

function Hamburger() {
  return (
    <div className={classes.menuWrap}>
      <input type="checkbox" className={classes.toggler} />
      <div className={classes.Hamburger}>
        <div></div>
      </div>

      <div className={classes.menu}>
        <div>
          <div>
            <ul>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/enterprise">Enterprise</Link>
              </li>
              <li>
                <Link href="/company">Company</Link>
              </li>

              <li>
                <Link href="/">Sign in</Link>
              </li>
              <li>
                <a href="#" Download>
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
