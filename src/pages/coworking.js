import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Layout } from "../components/layout/layout";
import { ContentBox } from "../components/content-box/content-box";
import { Button } from "../components/button/button";
import { TitleBox } from "../components/title-box/title-box";

import * as styles from "./coworking.module.css";

const CoworkingPage = () => {
  return (
    <Layout
      heroImg={
        <StaticImage
          src={"../images/coworking.jpg"}
          alt="Laptop und Cappuchino mit Schaumherz von oben"
          placeholder="blurred"
        />
      }
    >
      <TitleBox>Coworking</TitleBox>
      <ContentBox mode="Full">
        <h2>Selbstverwaltet. Solidarisch.</h2>
        <p>
          Als Verein machen wir Coworking ein bisschen anders. Weniger Geld
          gegen Ware, unpersönlich, anonym, und mehr Teil des Vereins und Space
          werden.
        </p>
        <p>
          Deshalb erhoffen wir uns ein gewisses Maß an Interesse und Mitarbeit
          am/im Verein von allen Coworkenden. Und deswegen sind unsere Coworking
          Preise Mitgliedsbeiträge für den Verein. Austreten und dein Modell
          wechseln kannst du natürlich trotzdem monatlich.
        </p>
      </ContentBox>
      <ContentBox
        mode="Right"
        sideImage={
          <StaticImage
            src={"../images/kalkspace_interior2.jpg"}
            alt="Arbeitsplatz"
            placeholder="none"
          />
        }
      >
        <h2>Wir haben 4 Coworking Modelle:</h2>
        <ul>
          <li>
            <h3>Fix (250€)</h3> Eigener, fester Schreibtisch;
          </li>
          <li>
            <h3>Flex (100€)</h3> Flexibel wählbarer Schreibtisch;
          </li>
          <li>
            <h3>Flex10 (50€)</h3> Flexibel wählbarer Schreibtisch; 10 Tage im
            Monat;
          </li>
          <li>
            <h3>Solidarity</h3> Auch wenn du die Coworkingbeiträge nicht
            aufbringen kannst, kannst du trotzdem vollwertiges Vereinsmitglied
            mit allen Rechten und Pflichten werden. Such dir ein
            Coworking-Modell aus und sprich den{" "}
            <a href="mailto:vorstand@kalk.space">Vorstand</a> kurz an.
          </li>
        </ul>
      </ContentBox>
      <ContentBox
        mode="Center"
        sideImage={
          <StaticImage
            src={"../images/coffee.png"}
            className={styles.coffeeImg}
            alt="Kaffeetasse mit Milchschaum"
            placeholder="none"
          />
        }
      >
        <p>
          Du magst dir den Space anschauen und die Coworkenden kennenlernen?
        </p>
        <p>
          Mach gerne einen Termin für einen Probetag aus. Ein Vereinsmitglied
          führt dich herum und kann dir alle Fragen beantworten.
        </p>
        <Button label="Probetag vereinbaren" url="#" />
      </ContentBox>
      <ContentBox mode="Full">
        <h2>FAQ</h2>
        <h3>Bietet ihr Teambüros an?</h3>
        <p>
          Nein. Da unser Platz begrenzt ist können wir keine dedizierten
          Teambüros anbieten.
        </p>
        <h3>Darf ich im Space telefonieren?</h3>
        <p>
          Jain. Teil von remote work sind natürlich Video Konferenzen und
          Anrufe. Das hat bisher mit guter Kommunikation und dem Aufteilen auf
          die 2 Coworking Räume gut funktioniert. Viele Coworkende tragen
          außerdem Kopfhörer und wir arrangieren uns untereinander. Trotzdem
          passt du als Vetriebsmitarbeiter*in mit 24h Calls eher nicht in
          unseren Coworking-Space.
        </p>
        <h3>Kann ich Arbeitsmaterial lagern?</h3>
        <p>
          Vielleicht. Wir versuchen natürlich, Dinge im Rahmen möglich zu machen
          und haben begrenzte Lagermöglichkeiten. Wertgegenstände sollten
          grundsätzlich nicht im Space gelagert werden.
        </p>
        <h3>Geht das Coworken auch ohne dieses Vereinsding?</h3>
        <p>
          Nein. Der Coworking Space IST der Verein. Als solches erhoffen wir uns
          ein gewisses Maß an Interesse und Mitarbeit am/im Vereinsleben von
          allen Coworkenden. Sonst funktioniert es halt nicht.
        </p>
      </ContentBox>
    </Layout>
  );
};

export default CoworkingPage;
