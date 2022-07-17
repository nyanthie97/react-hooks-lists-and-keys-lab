import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a> 
  });

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  return (<nav>{linkElements}</nav>);
}

export default NavBar;
