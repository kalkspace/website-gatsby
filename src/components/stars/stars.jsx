import React, { useMemo } from "react";
import { createCanvas } from "canvas";

const tileSize = {
  width: 200,
  height: 200,
};

/** @type {React.FC<{ [k: string]: any }>} */
export const GenerativeStarBackground = (props) => {
  const background = useMemo(() => {
    return generateStars(tileSize.width, tileSize.height);
  }, []);
  return (
    <div
      {...props}
      style={{
        background: background && `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

/**
 * @param {number} width
 * @param {number} height
 */
function generateStars(width, height) {
  /** @type {HTMLCanvasElement | import("canvas").Canvas} */
  let canvas;
  if (createCanvas) {
    canvas = createCanvas(width, height);
  } else {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
  }

  const stars = /** @type {CanvasRenderingContext2D} */ (
    canvas.getContext("2d")
  );
  if (!stars) {
    throw new Error("Unable to get 2D Context");
  }

  const incrementCount = 1;
  for (let x = 0; x < canvas.width; x = x + incrementCount) {
    for (let y = 0; y < canvas.height; y = y + incrementCount) {
      const columnRND = Math.floor(Math.random() * canvas.width + 1);
      if (columnRND > canvas.width - 1) {
        const drawRND = Math.floor(Math.random() * 100 + 1);

        if (drawRND <= 50) {
          const opacity = Math.random() + 0.5;
          const colornum = Math.floor(Math.random() * 255 + 1);
          stars.fillStyle = `rgba(${colornum},${colornum},${colornum},${opacity})`;
          stars.fillRect(x, y, Math.random() + 1, Math.random() + 1);
          stars.shadowColor = `rgba(${colornum},${colornum},${colornum},${opacity})`;
          stars.shadowOffsetX = Math.random() + 0.1;
          stars.shadowOffsetY = Math.random() + 0.1;
          stars.shadowBlur = Math.random() * 5;
        }
      }
    }
  }
  return canvas.toDataURL("image/png");
}
