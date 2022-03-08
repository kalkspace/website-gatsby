import React from "react";
import styles from "./layout.module.css";

import { Header } from "../header/header";

export const Layout = ({ children, heroImg }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        {heroImg && <div className={styles.hero}>{heroImg}</div>}
        {children}
      </div>
    </div>
  );
};
