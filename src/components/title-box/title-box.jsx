import clsx from "clsx";
import React from "react";

import * as styles from "./title-box.module.css";

/** @type {React.FC<{ pink?: boolean, titles: string[] }>} */
export const TitleBox = ({ titles, pink = false }) => {
  // add the first element twice, so there is no jump in the animation
  const animatedTitles = [...titles, titles[0]].flatMap((t) => [t, t]);

  /** @type {React.CSSProperties} */
  /* @ts-ignore */
  const inlineStyle = { "--element-count": titles.length };

  return (
    <div className={clsx(styles.titleBox, pink && styles.pink)}>
      <div className={styles.rotator} style={inlineStyle}>
        {animatedTitles.map((title) => (
          <span>{title}</span>
        ))}
      </div>
      space
    </div>
  );
};
