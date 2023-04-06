import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => {
    let localLink = `#${link}`
    return <a key={link} href={localLink}>{link}</a>
  })

  return <nav>{ linkElements }</nav>;
}

export default NavBar;
