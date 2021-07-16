import React from "react";

import MenuIcon from "@material-ui/icons/Menu";

export default function Menu() {
  return (
    <div className="menu">
      <MenuIcon className="menu-btn"></MenuIcon>
      <div className="menu-name">HOME</div>
    </div>
  );
}

const list = ["HOME", "PROJECTS", "HISTORY", "CONTACT"];
