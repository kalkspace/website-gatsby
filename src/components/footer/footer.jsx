import React from "react";
import logo from "../../images/kalkspace_fontlogo_white.svg";

import * as styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <a href="/" title="Zur Startseite">
        <img className={styles.footerLogo} src={logo} alt="KalkSpace" />
      </a>
      <ul className={styles.footerLinks}>
        <li>
          <a
            href="https://shop.spreadshirt.de/kalkspace"
            title="Zum KalkSpace Shop"
            target="_blank"
            rel="noreferrer"
          >
            Merch
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kalk.space/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/kalkspace"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://chaos.social/@kalkspace"
            target="_blank"
            rel="noreferrer"
          >
            Mastodon
          </a>
        </li>
        <li>
          <a
            href="https://join.slack.com/t/kalkspacecommunity/shared_invite/enQtNzg3NDg2MTMyMDgwLWRmODI3OGQzODM4NGQ5M2I3YjhmZDI5ODE0ZmE5YjkwOTVlNTE1Y2MzYTM0NDk4NGM5YzZmMzU1NDBiY2JmNWM"
            target="_blank"
            rel="noreferrer"
          >
            Slack
          </a>
        </li>
        <li>
          <a href="/datenschutz">Datenschutz</a>
        </li>
        <li>
          <a href="/impressum">Impressum</a>
        </li>
      </ul>
    </footer>
  );
};
