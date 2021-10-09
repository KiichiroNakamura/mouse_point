import React from "react";
// import Icon from "../public/image.png";
import { Image } from "react-konva";
import useImage from "use-image";

export const ImageDisplay = () => {
  const image = useImage("../public/image.png");
  // return (
  // <div>
  //   <img src={Icon} alt="アイコン" />
  // </div>
  // );
  return <Image image={image} />;
};
