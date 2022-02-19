import React, { useRef } from "react";

import "./Sidebar.css";

export interface ISidebar {
  handleDataChange: (value: string) => void;
}
export function Sidebar({ handleDataChange }: ISidebar) {
  const sidebarRef = useRef<any>(null);
  const sidebarSandwich = useRef<any>(null);
  const sidebarSandwichSpan1 = useRef<any>(null); 
  const sidebarSandwichSpan2 = useRef<any>(null);
  const sidebarSandwichSpan3 = useRef<any>(null);

  const handleALotOfChange = (name: string) => {
    handleDataChange(name);
    const sidebarSpanOne = sidebarSandwichSpan1.current;
    sidebarSpanOne.style.background === "aliceblue"
      ? (sidebarSpanOne.style.background = "yellow")
      : (sidebarSpanOne.style.background = "aliceblue");
    const sidebarSpanTwo = sidebarSandwichSpan2.current;
    sidebarSpanTwo.style.background === "aliceblue"
      ? (sidebarSpanTwo.style.background = "yellow")
      : (sidebarSpanTwo.style.background = "aliceblue");
    const sidebarSpanThree = sidebarSandwichSpan3.current;
    sidebarSpanThree.style.background === "aliceblue"
      ? (sidebarSpanThree.style.background = "yellow")
      : (sidebarSpanThree.style.background = "aliceblue");
  };

  const toggleSidebar = () => {
    const spanned = sidebarRef.current;
    spanned.style.left === "-200px"
      ? (spanned.style.left = "0px")
      : (spanned.style.left = "-200px");
    const sandwich = sidebarSandwich.current;
    sandwich.style.left === "25px"
      ? (sandwich.style.left = "125px")
      : (sandwich.style.left = "25px");
  };

  return (
    <div className="sidebar" ref={sidebarRef}>
      <div
        className="sidebar-toggle"
        ref={sidebarSandwich}
        onClick={() => toggleSidebar()}
      >
        <span ref={sidebarSandwichSpan1}></span>
        <span ref={sidebarSandwichSpan2}></span>
        <span ref={sidebarSandwichSpan3}></span>
      </div>
      <ul className="sidebar-list">
        <li onClick={() => handleALotOfChange("react")}>React</li>
        <li onClick={() => handleALotOfChange("javascript")}>Javascript</li>
        <li>Typescript</li>
        <li>Redux</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Flexbox</li>
        <li>Grid</li>
        <li>SASS</li>
        <li>RxJS</li>
        <li>Git</li>
      </ul>
    </div>
  );
}
