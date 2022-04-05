import * as React from "react";

import { Layout } from "../components/layout/layout";
import { GenerativeStarBackground } from "../components/stars/stars";
import { TitleBox } from "../components/title-box/title-box";

import heroImg from "../images/kalkspace_interior1.jpg";
import * as styles from "./index.module.css"

const IndexPage = () => {
  return (
    <GenerativeStarBackground>
      <Layout
        heroImg={
          <img
            src={heroImg}
            alt="Innenansicht des KalkSpace: Blick auf die Küche, mit einem großen Esstisch."
          />
        }
      >
        <div className={styles.titleBoxWrapper}>
          <TitleBox titles={["hack", "coworking", "community"]} />
        </div>
      </Layout>
    </GenerativeStarBackground>
  );
};

export default IndexPage;
