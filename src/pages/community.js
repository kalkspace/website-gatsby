import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "../components/layout/layout";
import { ContentBox } from "../components/content-box/content-box";
import { Button } from "../components/button/button";
import { TitleBox } from "../components/title-box/title-box";

import * as styles from "./community.module.css";

const CommunityPage = () => {
  return (
    <Layout
      heroImg={
        <StaticImage
          src={"../images/community.jpg"}
          alt="Chaos aus Roboter Bauteilen und Bastelkram auf Holztisch"
          placeholder="blurred"
        />
      }
    >
      <TitleBox>Community</TitleBox>
      <ContentBox mode="Full">
        <h2>Raum für Dinge. Und Menschen.</h2>
        <ul>
          <li>
            <h3>Der Space hat Platz für: </h3>Gruppen, Vereine, Meetups, User
            Groups, Aktivismus, Hackathons, nicht-kommerzielles Gedöns,
            Wochenend-Aktionen, Menschen mit und ohne Technik-Interesse
          </li>
          <li>
            <h3>Der Space hat keinen Platz für:</h3> Hochglanz, Überheblichkeit,
            Diskriminierung. Unser{" "}
            <a
              href="https://discuss.kalk.space/t/code-of-conduct/262"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Conduct
            </a>{" "}
            wird von der Community geschrieben und gelebt, von Mitgliedern wie
            Besucher*innen, online und offline.
          </li>
          <li>
            <h3>Was kann ich hier machen?</h3> Frickeln, Yoga, Lesen, Hacken,
            Lebensmittel retten, Malen, Löten, Pläne schmieden, etc. Wir
            praktizieren im Space “Do-ocracy”. Das heißt du kannst alles machen,
            was unserem (sehr breiten) Vereinszweck entspricht.
          </li>
        </ul>
      </ContentBox>
      <ContentBox
        mode="Right"
        sideImage={
          <StaticImage
            src={"../images/sticker.png"}
            alt="Schreibtisch im KalkSpace, darüber Weltraum-Poster"
            placeholder="none"
          />
        }
      >
        <h2>Programm</h2>
        <p>
          Ein kleiner Einblick in die Events, die (un)regelmäßig im Space
          stattfinden:
        </p>
        <ul>
          <li>
            <h3>Plenum:</h3> jeden Montag ab 20.00 (z.Z. online).
            Arbeitstreffen, um Dinge zu organisieren und Projekte zu
            koordinieren. Öffentlich, jede*r kann dazukommen, mitreden und die
            Community kennenlernen.
          </li>
          <li>
            <h3>Frickelsamstag:</h3> Jeden 3. Samstag im Monat wird je nach Lage
            online oder offline im Space zusammen gefrickelt, Software und
            Hardware repariert und kaputt gemacht. Termin im Forum.
          </li>
          <li>
            <h3>f.u.c.k.:</h3> Kurz für FrauenNichtbinärTransInter Und Computer
            Kram. Feministisches Tech-Kollektiv mit Schwerpunkt Skillsharing,
            Verschlüsselung, digitale Selbstverteidigung.
          </li>
          <li>
            <h3>WebDev Learning Group:</h3> Jeden Dienstag ab 8 online,
            Einsteiger*innen-freundlich, gerne eigene Probleme mitbringen.
          </li>
        </ul>
      </ContentBox>
      <ContentBox
        mode="Left"
        sideImage={
          <StaticImage
            src={"../images/hammer.png"}
            alt="Pinkfarbener Hammer"
            placeholder="none"
          />
        }
      >
        <h2>Infrastruktur:</h2>
        <p>
          Neben dem Raum betreiben und bauen wir jede Menge Software. Ein großer
          Teil der von uns betriebenen Software ist kostenlos für Alle nutzbar.
          Ein paar Beispiele:
        </p>
        <ol>
          <li>BBB</li>
          <li>Pretix</li>
          <li>Excalidraw</li>
          <li>Discourse</li>
          <li>Timeline</li>
        </ol>
        <Button label="Schau bei Github vorbei" url="#" />
      </ContentBox>
      <ContentBox mode="Center">
        <h3>Wie ist der Raum?</h3>
        <p>
          Im KalkSpace bewegen wir uns auf 2 Ebenen: dem DeepSpace (unten) und
          dem WorkSpace (oben). Der DeepSpace befindet sich im Souterrain, ist
          ca. 60m2 groß und hat Platz für Yoga, Meetups bis ca. 20 Leute,
          Kleinkunst und eine Werkstatt.
        </p>
        <p>
          Der WorkSpace befindet sich oben im Garagenhof. Er ist ebenfalls ca.
          60m2 groß, aufgeteilt auf 2 Räume. Im vorderen Raum befindet sich die
          Küche, unser Küchentisch, eine Sitzecke und ein großer Screen. Im
          hinteren Raum befinden sich die meisten Coworking-Arbeitsplätze.
        </p>
      </ContentBox>
      <ContentBox
        mode="Right"
        sideImage={
          <StaticImage
            src={"../images/drawing.jpg"}
            alt="Pinkfarbener Hammer"
            placeholder="none"
          />
        }
      >
        <h2>Mitmachen:</h2>
        <p>
          Eine Vereinsmitgliedschaft kostet 60€ im Jahr, bzw. ist kostenlos wenn
          du die finanziellen Mittel nicht hast. Du bekommst dafür die Schlüssel
          und das Recht, den Space aktiv mitzugestalten.
        </p>
        <p>
          Hört sich das gut an? Wir freuen uns immer über helfende Hände und
          neue Gesichter. Lern uns kennen:
        </p>
        <Button
          label="Slack"
          url="https://join.slack.com/t/kalkspacecommunity/shared_invite/enQtNzg3NDg2MTMyMDgwLWRmODI3OGQzODM4NGQ5M2I3YjhmZDI5ODE0ZmE5YjkwOTVlNTE1Y2MzYTM0NDk4NGM5YzZmMzU1NDBiY2JmNWM"
        />
        <Button label="Forum" url="https://discuss.kalk.space/" />
        <Button label="Plenum" url="https://discuss.kalk.space/t/plenum/275" />
      </ContentBox>
    </Layout>
  );
};

export default CommunityPage;
