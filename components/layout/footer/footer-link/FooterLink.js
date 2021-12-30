import React from "react";
import Link from "next/link";

function FooterLink(props) {
  return (
    <li>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default FooterLink;
