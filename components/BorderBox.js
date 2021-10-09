import { Line } from "react-konva";

type props = {
  borderColor: string,
  x: number,
  y: number,
  borderWidth: number,
  width: number,
  height: number,
  fillColor?: string,
  rotation: number
  //  offset?: Vector2d
};

const BorderBox = ({
  borderColor,
  x,
  y,
  borderWidth,
  height,
  width,
  fillColor,
  rotation,
  offset
}) => {
  return (
    <Line
      x={x}
      y={y}
      points={[0, 0, 0, 300, 300, 300, 300, 0]}
      tension={0}
      closed
      stroke={borderColor}
      strokeWidth={borderWidth}
      fill={fillColor ? fillColor : null}
      rotation={rotation}
      offset={offset}
    />
  );
};

export default BorderBox;
