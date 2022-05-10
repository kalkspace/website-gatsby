import React from "react";

import * as styles from "./layout.module.css";

import { GenerativeStarBackground } from "../stars/stars";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

/** @type {React.FC<{ heroImg?: React.ReactNode }>} */
export const Layout = ({ children, heroImg }) => {
  return (
    <GenerativeStarBackground>
      <div className={styles.layout}>
        <div className={styles.container}>
          <Header />
          {heroImg && <div className={styles.hero}>{heroImg}</div>}
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </GenerativeStarBackground>
  );
};
