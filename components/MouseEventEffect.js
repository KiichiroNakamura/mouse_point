import React, { useState, useEffect } from "react";

export const MouseEventEffect = () => {
  //console.log("MouseEventEffectが呼ばれました");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    //console.log("useEffectが呼ばれました");
    window.addEventListener("mousemove", getMousePosition);
    return () => {
      window.removeEventListener("mousedown", getMousePosition);
    };
  }, []);

  return (
    <div>
      <ul>
        <li>X座標：{x}</li>
        <li>Y座標：{y}</li>
      </ul>
    </div>
  );
};
