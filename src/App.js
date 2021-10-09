import BorderBox from "../components/BorderBox";
import { ImageDisplay2 } from "../components/ImageDiplay2";
import { MouseEventEffect } from "../components/MouseEventEffect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BorderBox />
      <MouseEventEffect />
      <ImageDisplay2 />
    </div>
  );
}
