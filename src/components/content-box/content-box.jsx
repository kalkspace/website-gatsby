import clsx from "clsx";
import React from "react";

import * as styles from "./content-box.module.css";

export const MODE = Object.freeze({
  full: "Full",
  left: "Left",
  center: "Center",
  right: "Right",
});

/** @type {React.FC<{ mode?: keyof MODE }>} */
export const ContentBox = ({ children, mode = MODE.full }) => {
  return <div className={clsx(styles.box, styles[`mode${mode}`])}>{children}</div>;
};
