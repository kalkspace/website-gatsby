import * as React from "react";

import { Layout } from "../components/layout/layout";
import { GenerativeStarBackground } from "../components/stars/stars";
import { TitleBox } from "../components/title-box/title-box";
import { ContentBox } from "../components/content-box/content-box";
import { Map } from "../components/map/map";
import { Button } from "../components/button/button";

import heroImg from "../images/kalkspace_interior1.jpg";
import blogImg from "../images/rc3-robots.jpg";
import roboImg from "../images/robot.png";
import blumeImg from "../images/blume.png";
import space1 from "../images/kalkspace_sternenposter.jpg";
import * as styles from "./index.module.css";

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
        <ContentBox boxClassName={styles.mapBox}>
          <h2>Hallo Welt</h2>
          <p>
            Wir sind ein Coworking Verein und eine Community kreativer Menschen
            in Kalk. Zusammen wollen wir einen Ort schaffen, an dem Menschen
            arbeiten, ihre Ideen verwirklichen und sich gegenseitig bereichern
            können.
          </p>
          <p>Du findest uns hier:</p>
          <Map
            position={[50.940569, 7.019904]}
            zoom={16}
            mapClassName={styles.mapContainer}
            popupText="Innenhof, dann nach rechts. Dritte Tür."
          />
        </ContentBox>
        <ContentBox
          mode="Right"
          sideImage={
            <img
              src={blogImg}
              alt="Selbstgebastelte Roboter auf einem Teppich in neonfarbener Beleuchtung"
            />
          }
        >
          <p>01.01.2022</p>
          <h2>Retro: remote Chaos Gedöns</h2>
          <p>
            Wir haben die remote Chaos Experience (rC3) erfolgreich überlebt.
            Die Bilanz: 12 glückliche Schrott-Roboter-Junghacker*innen (fast)
            keine Brandblasen, 5 Millionen Lichter...
          </p>
          <Button label="Mehr" url="#" />
        </ContentBox>
        <ContentBox
          mode="Center"
          sideImage={
            <img
              className={styles.robotImage}
              src={roboImg}
              alt="Roboter Grafik"
            />
          }
        >
          <h2>Corona</h2>
          <p>
            Als Coworkingspace betrifft uns die Coronapandemie
            selbstverständlich relativ stark.
          </p>
          <p>
            Unsere Regelungen zur Coronapandemie findest du in unserem Forum.
          </p>
          <Button label="Mehr" url="#" />
        </ContentBox>
        <ContentBox
          mode="Left"
          sideImage={
            <img
              src={space1}
              alt="Schreibtisch im KalkSpace, darüber Weltraum-Poster"
            />
          }
        >
          <h2>Für alle</h2>
          <p>
            Deine Teilhabe am KalkSpace ist nicht von finanziellen Mitteln
            abhängig.
          </p>
          <p>
            Sowohl das Coworking als auch das Vereinsleben stehen dir auch
            offen, wenn du die Mitgliedsbeiträge nicht aufbringen kannst.
          </p>

          <p>
            Schreib uns eine kurze Mail an{" "}
            <a href="mailto:vorstand@kalk.space">vorstand@kalk.space</a> oder
            sprich uns montags kurz an.
          </p>
        </ContentBox>
        <ContentBox>
          <h2>Vision</h2>
          <ul>
            <li>
              <h3>Community matters!</h3>
              Digitale Menschen brauchen analoge Netzwerke
            </li>
            <li>
              <h3>Arbeitsumgebung</h3>
              Gutes Internet, flexible Möbel, Getränke, Whiteboards, Pflanzen,
              Meeting-Räume
            </li>
            <li>
              <h3>Organisiert im Kollektiv</h3>
              Flache Hierarchie, maximale Mitbestimmung &amp; Transparenz
            </li>
            <li>
              <h3>Vielfalt ist ein Gewinn</h3>
              Ein Code of Conduct hilft, diese zu schützen und fördern.
            </li>
            <li>
              <h3>Plattform statt Insel</h3>
              Offen für Meetups, Aktivismus, Community Events, Partnerschaften
            </li>
            <li>
              <h3>Inspiration tanken</h3>
              Ausstellungen lokaler Künstler*innen, Hackprojekte.
            </li>
          </ul>
          <Button label="Häh?" url="https://google.com" />
        </ContentBox>
        <ContentBox sideImage={<img src={blumeImg} alt="Blumen Grafik" />}>
          <h2>Partner*innen</h2>
        </ContentBox>
      </Layout>
    </GenerativeStarBackground>
  );
};

export default IndexPage;
