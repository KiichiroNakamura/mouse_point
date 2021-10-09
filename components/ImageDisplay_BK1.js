import React, { Component, useState, useRef, useMount } from "react";
import { render } from "react-dom";
import * as Konva from "konva";
import { Stage, Layer, Image, Rect, Shape } from "react-konva";
import useImage from "use-image";
export const ImageDisplay2 = () => {
  const BackImage = () => {
    const [image] = useImage("https://konvajs.org/assets/yoda.jpg");
    return <Image image={image} x={0} y={0} width={500} height={500} />;
  };
  const scrollLayerRef = useRef(null);
  scrollLayerRef.current = new Konva.default.Layer();

  // const stageRef = useRef(null);
  // const stage = new Konva.default.Stage({
  //   // container: "pdf-view-container",
  //   width: "200px",
  //   height: "100px"
  // });
  // stageRef.current = stage;
  // canvasRef.current = document.createElement("canvas");
  // paintingImageRef.current = new Konva.default.Image({
  //   image: canvasRef.current,
  //   x: 0,
  //   y: 0,
  //   width: imageWidth,
  //   height: imageHeight
  // });

  return (
    <Stage width={500} height={200} style={{ overflow: "auto" }}>
      <Layer>
        <BackImage />
      </Layer>
      <Layer>
        <Shape
          width={500}
          height={500}
          fill={"rgba(0,0,0,0.5"}
          opacity={0.6}
          // sceneFunc={(ctx: Context, shape: ShapeType) => {
          //   ctx.beginPath();
          //   ctx.moveTo(0, 0);
          //   ctx.lineTo(shape.width(), 0);
          //   ctx.lineTo(shape.width(), shape.height());
          //   ctx.lineTo(0, shape.height());
          //   ctx.lineTo(0, 0);
          //   ctx.closePath();
          //   ctx.fill();
          //   ctx.clearRect(120, 50, 250, 250);
          //   ctx.fillStrokeShape(shape);
          // }}
          listening={false}
        />
      </Layer>
    </Stage>
  );
};
