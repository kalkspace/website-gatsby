import clsx from "clsx";
import React from "react";

import * as styles from "./content-box.module.css";

/** @type {Record<string, "Full" | "Left" | "Center" | "Right">} */
export const MODE = Object.freeze({
  full: "Full",
  left: "Left",
  center: "Center",
  right: "Right",
});

/** @type {(mode: MODE[keyof MODE]) => keyof styles} */
const modeStyle = (mode) => `mode${mode}`;

/** @type {React.FC<{ mode?: MODE[keyof MODE], sideImage?: React.ReactNode }>} */
export const ContentBox = ({ children, mode = MODE.full, sideImage }) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.box, modeStyle(mode))}>{children}</div>
      {sideImage && <div className={styles.sideImage}>{sideImage}</div>}
    </div>
  );
};
