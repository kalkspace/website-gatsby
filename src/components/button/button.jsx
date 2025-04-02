import React from "react";
import * as styles from "./button.module.css";
import clsx from "clsx";

/** @type {React.FC<React.PropsWithChildren<{ label: string; url: string; className?: string }>>} */
export const Button = (props) => {
  return (
    <a href={props.url} className={clsx(props.className, styles.button)}>
      {props.label}
    </a>
  );
};
