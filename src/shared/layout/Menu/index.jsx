import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function Menu({ onToggle, isOpen }) {
  const [menuItem, setMenuItem] = useState("home");

  const list = ["home", "projects", "history", "contacts"];
  const menuClass = ["menu-wrapper"];
  const menuName = ["menu-name"];

  const menuClickedHandler = (item) => {
    setMenuItem(item);
  };

  if (isOpen) {
    menuClass.push("open");
    menuName.push("rotation");
  }
  return (
    <div className="menu">
      <div className={menuClass.join(" ")}>
        {isOpen ? (
          <CloseIcon onClick={onToggle} className="menu-btn"></CloseIcon>
        ) : (
          <MenuIcon onClick={onToggle} className="menu-btn"></MenuIcon>
        )}
      </div>
      <div className={menuName.join(" ")}>
        {isOpen ? (
          <div className="menu-name-content">
            {list.map((item) => (
              <Link
                to={`/${item}`}
                onClick={() => {
                  onToggle();
                  menuClickedHandler(item);
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        ) : (
          <div className="menu-name-item">{menuItem}</div>
        )}
      </div>
    </div>
  );
}
