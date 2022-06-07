import clsx from "clsx";
import React from "react";

import * as styles from "./title-box.module.css";

/** @type {React.FC<{ pink?: boolean }>} */
export const TitleBox = ({ pink = false, children }) => {
  return (
    <div className={styles.titleBoxWrapper}>
      <div className={clsx(styles.titleBox, pink && styles.pink)}>
        {children}
      </div>
    </div>
  );
};

/** @type {React.FC<{titles: string[], animationIntervalMs?: number }>} */
export const TitleAnimator = ({ titles, animationIntervalMs }) => {
  // add the first element twice, so there is no jump in the animation
  const animatedTitles = [...titles, titles[0]].flatMap((t) => [t, t]);

  /** @type {React.CSSProperties} */
  /* @ts-ignore */
  const inlineStyle = { "--element-count": titles.length };
  if (animationIntervalMs) {
    /* @ts-ignore */
    inlineStyle["--animation-speed"] = `${animationIntervalMs}ms`;
  }

  return (
    <>
      <div className={styles.rotator} style={inlineStyle}>
        {animatedTitles.map((title) => (
          <span>{title}</span>
        ))}
      </div>
      space
    </>
  );
};
