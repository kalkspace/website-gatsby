import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { createCanvas } from "canvas";

import * as styles from "./stars.module.css";

const tileSize = {
  width: 400,
  height: 400,
};

/** @type {React.FC<{ [k: string]: any }>} */
export const GenerativeStarBackground = ({ children, ...props }) => {
  const background = useMemo(() => {
    return generateStars(tileSize.width, tileSize.height);
  }, []);

  const [bgHeight, setBgHeight] = useState(0);
  /** @type {import("react").MutableRefObject<HTMLDivElement | null>} */
  const contentRef = useRef(null);
  const updater = useCallback(() => {
    if (contentRef.current) {
      const bb = contentRef.current.getBoundingClientRect();
      setBgHeight(bb.height);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updater);
    updater();
    return () => window.removeEventListener("resize", updater);
  }, [updater]);

  const radialGradients = useMemo(
    () =>
      typeof window === "undefined"
        ? ""
        : generateRadialGradient(document.body.clientWidth, bgHeight),
    [typeof window, bgHeight]
  );

  return (
    <div {...props} className={styles.wrapper}>
      <div ref={contentRef}>{children}</div>
      <div
        style={{ height: bgHeight || undefined }}
        className={styles.cloudWrapper}
      >
        <div
          style={{ background: radialGradients }}
          className={styles.cloud}
        ></div>
      </div>
      <div
        className={styles.stars}
        style={{
          backgroundImage: background && `url(${background})`,
          height: bgHeight || undefined,
        }}
      />
    </div>
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

/**
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
function rn(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * @template T
 * @param  {...T} args
 * @returns {T}
 */
function rs(...args) {
  return args[rn(0, args.length - 1)];
}

/**
 * @param {number} width width of area
 * @param {number} height height of area
 * @returns {string}
 */
function generateRadialGradient(width, height) {
  let ret = [];
  const max = height * 0.007;
  for (let i = 0; i < max; ++i) {
    const color = rs(
      [0, 163, 165],
      [0, 147, 234],
      [228, 197, 0],
      [126, 56, 6],
      [46, 37, 64],
      [39, 68, 146]
    );
    ret.push(
      `radial-gradient(circle ${rn(150, 350)}px at left ${rn(
        1,
        width
      )}px top ${rn(1, height)}px, rgba(${color[0]},${color[1]},${
        color[2]
      },${rn(0.2, 0.4)}), transparent)`
    );
  }
  return ret.join(",");
}
