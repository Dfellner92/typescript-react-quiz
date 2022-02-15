import React, { useRef } from "react";

import "./Sidebar.css";

export const Sidebar = () => {
  const sidebarRef = useRef<any>(null);
  const toggleSidebar = () => {
    const spanned = sidebarRef.current;
    spanned.style.left === "-200px"
      ? (spanned.style.left = "0px")
      : (spanned.style.left = "-200px");
  };

  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebar-toggle" onClick={() => toggleSidebar()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="sidebar-list">
        <li>React</li>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    </div>
  );
};
