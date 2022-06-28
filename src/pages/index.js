import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "../components/layout/layout";
import { TitleAnimator, TitleBox } from "../components/title-box/title-box";
import { ContentBox } from "../components/content-box/content-box";
import { Map } from "../components/map/map";
import { Button } from "../components/button/button";

import * as styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout
      heroImg={
        <StaticImage
          src={"../images/kalkspace_interior1.jpg"}
          alt="Innenansicht des KalkSpace: Blick auf die Küche, mit einem großen Esstisch."
          placeholder="none"
        />
      }
    >
      <TitleBox>
        <TitleAnimator titles={["hack", "coworking", "community"]} />
      </TitleBox>
      <ContentBox boxClassName={styles.mapBox}>
        <h2>Hallo Welt</h2>
        <p>
          Wir sind ein Coworking Verein und eine Community kreativer Menschen in
          Kalk. Zusammen wollen wir einen Ort schaffen, an dem Menschen
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
          <StaticImage
            src={"../images/rc3-robots.jpg"}
            alt="Selbstgebastelte Roboter auf einem Teppich in neonfarbener Beleuchtung"
            placeholder="none"
            transformOptions={{ fit: "contain" }}
          />
        }
      >
        <p>01.01.2022</p>
        <h2>Retro: remote Chaos Gedöns</h2>
        <p>
          Wir haben die remote Chaos Experience (rC3) erfolgreich überlebt. Die
          Bilanz: 12 glückliche Schrott-Roboter-Junghacker*innen (fast) keine
          Brandblasen, 5 Millionen Lichter...
        </p>
        <Button label="Mehr" url="#" />
      </ContentBox>
      <ContentBox
        mode="Center"
        sideImage={
          <StaticImage
            className={styles.robotImage}
            src={"../images/robot.png"}
            alt="Roboter Grafik"
            placeholder="none"
          />
        }
      >
        <h2>Corona</h2>
        <p>
          Als Coworkingspace betrifft uns die Coronapandemie selbstverständlich
          relativ stark.
        </p>
        <p>Unsere Regelungen zur Coronapandemie findest du in unserem Forum.</p>
        <Button label="Mehr" url="#" />
      </ContentBox>
      <ContentBox
        mode="Left"
        sideImage={
          <StaticImage
            src={"../images/kalkspace_sternenposter.jpg"}
            alt="Schreibtisch im KalkSpace, darüber Weltraum-Poster"
            placeholder="none"
          />
        }
      >
        <h2>Für alle</h2>
        <p>
          Deine Teilhabe am KalkSpace ist nicht von finanziellen Mitteln
          abhängig.
        </p>
        <p>
          Sowohl das Coworking als auch das Vereinsleben stehen dir auch offen,
          wenn du die Mitgliedsbeiträge nicht aufbringen kannst.
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
      <ContentBox
        mode="Center"
        sideImage={
          <StaticImage
            src={"../images/blume.png"}
            alt="Blumen Grafik"
            placeholder="none"
          />
        }
      >
        <h2>Partner*innen</h2>
        <StaticImage
          src={"../images/railslove_logo.png"}
          alt="Railslove Logo"
          className={styles.partnerLogo}
          placeholder="none"
        />
        <p>
          Unsere Freund*innen von <a href="https://railslove.com">Railslove</a>{" "}
          haben schon früh an unsere Ideen geglaubt und unterstützen uns seitdem
          auf ganzer Linie. Danke!
        </p>
        <StaticImage
          src={"../images/stormforger_logo.png"}
          alt="Stormforger Logo"
          className={styles.partnerLogo}
        />
        <p>
          Dank <a href="https://www.stormforger.com/">StormForger</a> haben wir
          einen vernünftigen Drucker in unserem Space.
        </p>
      </ContentBox>
      <ContentBox>
        <h2>Menschen</h2>
        <p>
          Im Space triffst du die unterschiedlichsten Menschen. Künstler*innen,
          Programmierer*innen, Lehrende und Lernende.
        </p>
        <div className={styles.team}>
          <div className={styles.teamMember}>
            <StaticImage
              src={"../images/penny.jpg"}
              alt="Avatar-Bild von Patricia Ennebach"
              title="Patricia Ennenbach"
              className={styles.teamAvatar}
            />
            <p className={styles.teamName}>Penny</p>
            <p>
              Softwareentwicklerin. Baut datenjournalistische Formate, Chatbots
              und Webanwendungen. Und viel zu wenig Drachen. Engagiert sich für
              FrauenNon-BinaryTransInter und Computer Kram (Fuck Cologne),
              Code4kids und Open Data.
            </p>
          </div>
          <div className={styles.teamMember}>
            <StaticImage
              src={"../images/mop.jpg"}
              alt="Avatar-Bild von Andreas Streichardt"
              title="Andreas Streichardt"
              className={styles.teamAvatar}
            />
            <p className={styles.teamName}>Mop</p>
            <p>
              Freiberuflicher Softwareentwickler, Scrum Master, Kalauer as a
              Service. Mag schnelle Ergebnisse und Prozessautomatisierung.
              Fahrradkette statt Blockchain.
            </p>
          </div>
          <div className={styles.teamMember}>
            <StaticImage
              src={"../images/christine.png"}
              alt="Avatar-Bild von Christine Gotthardt"
              title="Christine Gotthardt"
              className={styles.teamAvatar}
            />
            <p className={styles.teamName}>Christine</p>
            <p>
              Softwareentwicklerin. Zweite Heimat zwischen Indien und Sizilien.
              Begeistert von agilen Arbeitsprozessen, netten Kolleg*innen,
              Frontend, lernt die Begeisterung fürs Backend und Geduld.
            </p>
          </div>
          <div className={styles.teamMember}>
            <StaticImage
              src={"../images/marcus.jpg"}
              alt="Avatar-Bild von Marcus Weiner"
              title="Marcus Weiner"
              className={styles.teamAvatar}
            />
            <p className={styles.teamName}>Marcus</p>
            <p>
              Freier Softwareentwickler. Begeistert von guter Infrastruktur,
              Kollaboration und pragmatischen Problemlösungen. Neue Ansätze fürs
              Arbeiten fördern die Lebensqualität.
            </p>
          </div>
        </div>
        <Button label="Lern uns kennen!" url="https://google.com" />
      </ContentBox>
    </Layout>
  );
};

export default IndexPage;
