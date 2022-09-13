import React from "react";
import * as styles from "./button.module.css";

/** @type {React.FC<React.PropsWithChildren<{ label: string; url: string }>>} */
export const Button = (props) => {
  return (
    <a href={props.url} className={styles.button} role="button">
      {props.label}
    </a>
  );
};
