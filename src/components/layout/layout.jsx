import React from "react";
import * as styles from "./layout.module.css";

import { Header } from "../header/header";

/** @type {React.FC<{ heroImg?: React.ReactNode }>} */
export const Layout = ({ children, heroImg }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        {heroImg && <div className={styles.hero}>{heroImg}</div>}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
