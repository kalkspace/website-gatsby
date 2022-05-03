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

  const boxShadows = useMemo(
    () =>
      typeof window === "undefined"
        ? ""
        : generateBoxShadow(document.body.clientWidth, bgHeight),
    [typeof window, bgHeight]
  );

  return (
    <div {...props} className={styles.wrapper}>
      <div ref={contentRef}>{children}</div>
      <div
        style={{ height: bgHeight || undefined }}
        className={styles.cloudWrapper}
      >
        <div style={{ boxShadow: boxShadows }} className={styles.cloud}></div>
        <svg width="0">
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".005"
              numOctaves="10"
              stitchTiles="stitch"
            />
            <feDisplacementMap in="SourceGraphic" scale="150" />
          </filter>
        </svg>
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
function generateBoxShadow(width, height) {
  let ret = [];
  const max = height * 0.004;
  for (let i = 0; i < max; ++i) {
    ret.push(`
      ${rn(1, width)}px ${rn(1, height)}px ${rn(
      width * 0.02,
      width * 0.05
    )}vmin ${rn(width * 0.01, width * 0.02)}vmin
      ${rs("#00A3A5", "#0093EA", "#E4C500", "#7E3806", "#2E2540", "#274492")}
    `);
  }
  return ret.join(",");
}
