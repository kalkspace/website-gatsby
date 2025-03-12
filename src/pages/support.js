import * as React from "react";

import { Layout } from "../components/layout/layout";
import { ContentBox, MODE } from "../components/content-box/content-box";

import * as styles from "./support.module.css";
import { Button } from "../components/button/button";

const impactBoxes = [
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
    heading: "Austausch & Networking",
    copy: 'Events wie das wöchentliche „Software frickeln für alle" oder das gelegentliche „Networking im Space" fördern den Wissensaustausch.',
  },
  {
    icon: "♻️",
    heading: "Nachhaltigkeit",
    copy: "Ressourcenschonende Leihangebote wie unser LastenRad oder Werkzeuge machen gemeinsame Nutzung möglich.",
  },
];

const memberBoxes = [
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
  {
    icon: "💙",
    heading: "Mitglied werden",
    copy: "Als Vereinsmitglied (10 € / Monat) erhältst du Zugang zum Space und kannst ihn aktiv mitgestalten. Werde Teil unserer Gemeinschaft und hilf mit, diesen besonderen Ort zu erhalten.",
    button: "Mitglied werden",
  },
  {
    icon: "🏢",
    heading: "Coworking Mitgliedschaft",
    copy: "Unterstütze uns durch eine Coworking-Mitgliedschaft.",
    button: "Coworking entdecken",
    link: "/coworking",
  },
];

const SupportPage = () => {
  return (
    <Layout>
      <h1>Unterstütze den KalkSpace!</h1>
      <section>
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
      </section>
      <section>
        <h2>Was wir bewirken</h2>
        <div className={styles.boxCollection}>
          {impactBoxes.map((box, i) => (
            <ContentBox mode={MODE.full} key={i}>
              <h3 className={styles.boxHeading}>
                <span>{box.icon}</span>
                <span>{box.heading}</span>
              </h3>
              <p>{box.copy}</p>
            </ContentBox>
          ))}
        </div>
      </section>
      <section>
        <h2>Mit deiner Unterstützung können wir mehr erreichen</h2>
        <p>Mit einem größeren finanziellen Spielraum könnten wir:</p>
        <ul>
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
      </section>
      <section>
        <h2>Wie du uns unterstützen kannst</h2>
        <div className={styles.boxCollection}>
          {memberBoxes.map((box, i) => (
            <ContentBox mode={MODE.full} innerClassName={styles.box} key={i}>
              <h3 className={styles.boxHeading}>
                <span>{box.icon}</span>
                <span>{box.heading}</span>
              </h3>
              <p>{box.copy}</p>
              <Button label={box.button} url={box.link ?? ""} />
            </ContentBox>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SupportPage;
