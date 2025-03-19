import * as React from "react";

import { Layout } from "../components/layout/layout";
import { ContentBox, MODE } from "../components/content-box/content-box";

import * as styles from "./support.module.css";
import { Button } from "../components/button/button";
import { StaticImage } from "gatsby-plugin-image";
import { TitleBox } from "../components/title-box/title-box";

/**
 * @param {{
 *   heading: string
 *   mode?: MODE[keyof MODE]
 *   boxes: {
 *     icon: string
 *     heading: string
 *     copy: string
 *     button?: string
 *     link?: string
 *   }[]
 * }} props
 * @returns
 */
const FeatureGrid = ({ heading, boxes, mode }) => (
  <ContentBox mode={mode} columns>
    <h2>{heading}</h2>
    <ul>
      {boxes.map((box, i) => (
        <li key={i}>
          <h3 className={styles.boxHeading}>
            <span>{box.icon}</span>
            <span>{box.heading}</span>
          </h3>
          <p>{box.copy}</p>
          {box.button && <Button label={box.button} url={box.link ?? ""} />}
        </li>
      ))}
    </ul>
  </ContentBox>
);

const SupportPage = () => {
  return (
    <Layout
      heroImg={
        <StaticImage
          src={"../images/ELI_4719.jpg"}
          alt="Platinen in Tierform und KalkSpace Flyer auf einem Holztisch"
          placeholder="blurred"
        />
      }
    >
      <TitleBox>Unterstütze den KalkSpace!</TitleBox>
      <ContentBox
        mode={MODE.right}
        sideImage={
          <StaticImage
            src={"../images/ELI_4722.png"}
            alt="Einhorn-Platine"
            placeholder="none"
          />
        }
      >
        <h2>Warum wir deine Hilfe brauchen</h2>
        <p>
          Der KalkSpace ist mehr als ein Coworking Space. Wir sind ein
          selbstverwalteter, solidarischer Verein, der einen Ort des Austauschs,
          des gemeinsamen Arbeitens und Lernens schafft. Als gemeinnütziger
          Verein werden wir hauptsächlich von unseren Mitgliedern getragen –
          doch um langfristig bestehen zu können und unser Angebot zu erweitern,
          brauchen wir deine Hilfe!
        </p>
        <p>
          Unsere Vision: Ein offener Raum, in dem digitale Bildung, Community
          und gemeinsames Gestalten zusammenkommen. Ein Ort, an dem
          Machtverhältnisse hinterfragt werden und Teilhabe für alle möglich ist
          – unabhängig von finanziellen Mitteln.
        </p>
        <Button label="Fördermitglied werden" />
        <Button
          label="Bei Betterplace spenden"
          url="https://www.betterplace.org/de/projects/83728-kalkspace-offener-community-raum-in-kalk"
        />
      </ContentBox>

      <FeatureGrid
        heading="Was wir bewirken"
        boxes={[
          {
            icon: "🌱",
            heading: "Community im Viertel",
            copy: "Wir schaffen eine Anlaufstelle im Stadtteil, die Menschen verbindet und Begegnung ermöglicht.",
          },
          {
            icon: "💻",
            heading: "Digitale Bildung",
            copy: "Workshops, Lerngruppen und Unterstützung bei der Orientierung im digitalen Raum – zugänglich für alle.",
          },
          {
            icon: "🔧",
            heading: "MakerSpace & DIY",
            copy: "Raum zum Selbermachen, Werkzeuge zum Teilen und gemeinsame Projekte zum Mitmachen.",
          },
          {
            icon: "🎵",
            heading: "Kunst & Kultur",
            copy: "Mit unserem DeepSpace bieten wir Raum für Kreativität: Electronic Music Lab, Jamsessions, Ausstellungen oder erste Auftritte angehender Künstler*innen – ein offener Raum zum Ausprobieren.",
          },
          {
            icon: "🤝",
            heading: "Austausch & Vernetzung",
            copy: "Events wie das wöchentliche „Software frickeln für alle“ oder das gelegentliche „Networking im Space“ fördern den Wissensaustausch.",
          },
          {
            icon: "♻️",
            heading: "Nachhaltigkeit",
            copy: "Ressourcenschonende Leihangebote wie unser LastenRad oder Werkzeuge machen gemeinsame Nutzung möglich.",
          },
        ]}
      />
      <ContentBox
        mode={MODE.left}
        sideImage={
          <StaticImage
            src={"../images/ELI_4573.jpg"}
            alt="Mensch beim Löten einer Platine"
            placeholder="none"
          />
        }
      >
        <h2>Mit deiner Unterstützung können wir mehr erreichen</h2>
        <p>Mit einem größeren finanziellen Spielraum könnten wir:</p>
        <ul className={styles.list}>
          <li>
            Mehr kostenfreie Workshops und Bildungsangebote für den Stadtteil
            anbieten
          </li>
          <li>Unsere technische Infrastruktur ausbauen und erneuern</li>
          <li>Neue Werkzeuge und Equipment für den MakerSpace anschaffen</li>
          <li>
            Mehr kostenfreie Soli-Mitgliedschaften für Menschen ermöglichen, die
            sich die Mitgliedschaft nicht leisten können
          </li>
          <li>Mehr gemeinnützige Community-Events veranstalten</li>
        </ul>
      </ContentBox>
      <FeatureGrid
        heading="Wie du uns unterstützen kannst"
        mode={MODE.center}
        boxes={[
          {
            icon: "💸",
            heading: "Einmalig oder regelmäßig spenden",
            copy: "Jede Spende hilft uns, den Space zu erhalten und zu verbessern.",
            button: "Bei Betterplace spenden",
            link: "https://secure.betterplace.org/de/donate/platform/projects/83728",
          },
          {
            icon: "🤝",
            heading: "Fördermitgliedschaft",
            copy: "Du möchtest den KalkSpace unterstützen, ohne aktiv teilzunehmen? Werde Fördermitglied und hilf uns mit einem selbstgewählten monatlichen oder jährlichen Beitrag.",
            button: "Fördermitglied werden",
          },
        ]}
      />
      <FeatureGrid
        heading="Werde Teil des KalkSpace"
        mode={MODE.right}
        boxes={[
          {
            icon: "🧡",
            heading: "Mitglied werden",
            copy: "Als Vereinsmitglied erhältst du Zugang zum Space und kannst ihn aktiv mitgestalten. Werde Teil unserer Gemeinschaft und hilf mit, diesen besonderen Ort zu erhalten.",
            button: "Mitglied werden",
          },
          {
            icon: "🏢",
            heading: "Coworking-Mitgliedschaft",
            copy: "Du findest unser Konzept gut und möchtest dich aktiv als Coworking-Mitglied einbringen?",
            button: "Coworking entdecken",
            link: "/coworking",
          },
        ]}
      />
    </Layout>
  );
};

export default SupportPage;
