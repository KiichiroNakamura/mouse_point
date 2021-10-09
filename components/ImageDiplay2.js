import React, { Component, useState, useRef, useMount } from "react";
import { render } from "react-dom";
import * as Konva from "konva";
import { Stage, Layer, Image, Rect, Shape } from "react-konva";
import useImage from "use-image";
import { VerticalBar } from "./VerticalBar";
export const ImageDisplay2 = () => {
  const BackImage = () => {
    const [image] = useImage("https://konvajs.org/assets/yoda.jpg");
    return <Image image={image} x={0} y={0} width={500} height={500} />;
  };

  const VarticalBar = (stage) => {
    console.log(stage.width + "---");
    const PADDING = 5;
    const style = {
      width: 10,
      height: 100,
      fill: "grey",
      opacity: 0.8,
      x: stage.width - PADDING - 10,
      y: PADDING,
      draggable: true,
      dragBoundFunc: function (pos) {
        pos.x = stage.width() - PADDING - 10;
        pos.y = Math.max(
          Math.min(pos.y, stage.height() - this.height() - PADDING),
          PADDING
        );
        return pos;
      },
      dragmove: function (stage) {
        // delta in %
        const availableHeight = stage.height() - PADDING * 2 - this.height();
        var delta = (this.y() - PADDING) / availableHeight;

        this.y(-(3000 - stage.height()) * delta);
      }
    };

    return (
      <Layer style={{ style }}>
        <BackImage />
      </Layer>
    );
  };

  const LayerScroller = (stage) => {
    const style = {
      width: 10,
      height: 100,
      fill: "grey",
      opacity: 0.8,
      x: 200 - 5 - 10,
      y: 5,
      draggable: true,
      dragBoundFunc: function (pos) {
        pos.x = Math.max(Math.min(pos.x, 200 - 200 - 5), 5);
        pos.y = 200 - 5 - 10;

        return pos;
      }
    };
    return (
      <Layer style={style}>
        <BackImage />
        {/* <Rect fill="red" x={100} y={100} width={300} height={200} /> */}
      </Layer>
    );
  };
  // const scrollLayerRef = useRef(null);
  // scrollLayerRef.current = new Konva.default.Layer();
  return (
    <Stage width={200} height={200} draggable={true}>
      {/* <Stage width={200} height={200}> */}
      {/* <LayerScroller value={Stage} /> */}
      <VarticalBar value={Stage} />
    </Stage>
  );
};
