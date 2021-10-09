import React, { Component, useState, useRef, useMount } from "react";
import { render } from "react-dom";
import * as Konva from "konva";
import { Stage, Layer, Image, Rect, Shape } from "react-konva";
import useImage from "use-image";
const stage = {
  width: 100,
  height: 100
};

export const VerticalBar = (stage) => {
  var WIDTH = 3000;
  var HEIGHT = 3000;

  const PADDING = 5;

  //var layer = new Konva.Layer();

  var scrollLayers = new Konva.Layer();
  var verticalBar = new Konva.Rect({
    width: 10,
    height: 100,
    fill: "grey",
    opacity: 0.8,
    x: stage.width() - PADDING - 10,
    y: PADDING,
    draggable: true,
    dragBoundFunc: function (pos) {
      pos.x = stage.width() - PADDING - 10;
      pos.y = Math.max(
        Math.min(pos.y, stage.height() - this.height() - PADDING),
        PADDING
      );
      return pos;
    }
  });
  scrollLayers.add(verticalBar);

  verticalBar.on("dragmove", function () {
    // delta in %
    const availableHeight = stage.height() - PADDING * 2 - verticalBar.height();
    var delta = (verticalBar.y() - PADDING) / availableHeight;

    stage.y(-(HEIGHT - stage.height()) * delta);
  });

  return <Layer />;
};
