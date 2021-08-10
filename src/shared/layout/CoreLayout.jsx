/**
 * Corelayout for the app
 *
 * @author Anh Tu Le <anh.le@vertics.co>
 *
 * @copyright Vertics Oy 2021
 */

import React, { useState } from "react";
import Info from "./Info";
import Menu from "./Menu";

export default function CoreLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    console.log("av");
    setIsOpen(!isOpen);
  };
  const infoFakeClass = ["core-layout__content-infoFake"];
  const menuClass = ["core-layout__content-menu"];
  if (isOpen) {
    infoFakeClass.push("short");
    menuClass.push("long");
  }
  return (
    <div className="core-layout">
      <div className="core-layout__content">
        <div className="core-layout__content-info">
          <Info />
        </div>
        <div className={infoFakeClass.join(" ")}></div>
        <div className="core-layout__content-main">s</div>
        <div className={menuClass.join(" ")}>
          <Menu onToggle={onToggle} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
