import React from "react";

export default function Parallax({ children, speed = 1, classStyle = null }) {
  return (
    <div data-scroll data-scroll-speed={speed} className={classStyle !== null ? classStyle : ''}>
      {children}
    </div>
  );
}