import { useEffect, useState } from "react";
import settings from "../../../data/animation_settings";
import Boxie from "./Boxie";
import classes from "./grid_lines.module.css";

const initialBox = [];
const initNum =
  Math.floor((window.innerWidth * window.innerHeight) / (32 * 32)) + 100;

for (let i = 0; i < initNum; i++) {
  initialBox.push({ id: i, hasLight: false });
}

const GridLines = ({ fix }) => {
  const [s_width, setWidth] = useState(window.innerWidth);
  const [s_height, setHeight] = useState(window.innerHeight);
  const [boxes, setBox] = useState(initialBox);

  const num = Math.floor((s_width * s_height) / (32 * 32)) + 100;

  useEffect(() => {
    if (settings.grid_spark) {
      let lightCount = 0;
      setInterval(() => {
        if (lightCount > 3) {
          lightCount = 0;
          setBox(initialBox);
        }

        const randNum = Math.floor(Math.random() * boxes.length);
        boxes[randNum].hasLight = !boxes[randNum].hasLight;
        setBox([...boxes]);
        lightCount += 1;
      }, 1000);
    }
  }, [boxes, num]);

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  const changeSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div
      className={classes.grid_lines}
      style={{ position: fix ? "fixed" : "absolute" }}
    >
      {boxes.map((box) => {
        return (
          <div
            className={`${classes.box} ${box.hasLight ? classes.light : ""}`}
            key={box.id}
          ></div>
        );
      })}
      <div className="outside">
        <div
          className="throw absolute-p animated zoomIn op-06"
          style={{
            top: "120px",
            left: "120px",
          }}
        >
          <Boxie />
        </div>
        <div
          className="throw absolute-p animated zoomIn op-06"
          style={{
            bottom: "120px",
            right: "140px",
          }}
        >
          <Boxie />
        </div>
      </div>
    </div>
  );
};

export default GridLines;
