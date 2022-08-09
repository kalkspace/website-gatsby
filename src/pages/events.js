import * as React from "react";

import { Layout } from "../components/layout/layout";
import { ContentBox } from "../components/content-box/content-box";
import { TitleBox } from "../components/title-box/title-box";

import * as styles from "./events.module.css";
import { StaticImage } from "gatsby-plugin-image";

export const Head = () => <title>Events | KalkSpace</title>;

const EventPage = () => {
  const [events, setEvents] = React.useState();

  React.useEffect(() => {
    fetch("https://discuss.kalk.space/discourse-post-event/events.json")
      .then(function (eventsResponse) {
        return eventsResponse.json();
      })
      .then(function (result) {
        const futureEvents = result.events.filter(function (event) {
          // use yesterday's date for comparison so we don't filter out currently running events
          const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
          return new Date(event.starts_at) > yesterday;
        });

        futureEvents.sort(function (a, b) {
          if (a.starts_at < b.starts_at) {
            return -1;
          } else if (a.starts_at > b.starts_at) {
            return 1;
          } else {
            return 0;
          }
        });

        setEvents(futureEvents);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <Layout
      heroImg={
        <StaticImage
          src={"../images/rc3-leuchten.jpg"}
          alt="rc3 Nowhere Pfeile in fluoreszierender Farbe"
          placeholder="blurred"
        />
      }
    >
      <TitleBox>Events</TitleBox>
      <ContentBox mode="Full">
        <ul>
          {events?.map((event) => {
            return (
              <li key={event.post.url} className={styles.event}>
                <p>
                  {new Date(event.starts_at).toLocaleString("de", {
                    weekday: "short",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <a href={"https://discuss.kalk.space/" + event.post.url}>
                  {event.post.topic.title}
                </a>
              </li>
            );
          })}
        </ul>
      </ContentBox>
    </Layout>
  );
};

export default EventPage;
