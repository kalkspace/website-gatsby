import * as React from "react";

import { Layout } from "../components/layout/layout";
import { ContentBox } from "../components/content-box/content-box";
import { TitleBox } from "../components/title-box/title-box";

import * as styles from "./events.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { ClipboardCopyBox } from "../components/clipboard-copy-box/clipboard-copy-box";

const icsUrl = "https://kalk.space/events.ics";

export const Head = () => <title>Events | KalkSpace</title>;

/** @typedef {{ starts_at: number, category_id: number, post: { url: string, topic: { title: string } } }} Event */
/** @typedef {Event & { category: Category | undefined }} RichEvent */
/** @typedef {{ events: Event[] }} EventsResponse */

/** @typedef {{ id: number, name: string, color: string, subcategory_list?: Category[] }} Category */
/** @typedef {{ category_list: { categories: Category[] } }} CategoriesResponse */

/**
 * @param {Category} category
 * @returns {Category[]}
 */
const flattenCategories = (category) => {
  return [
    category,
    ...(category.subcategory_list?.flatMap(flattenCategories) ?? []),
  ];
};

/**
 * @param {Date} date
 * @returns {string}
 */
const formatISODate = (date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

/**
 * @param {Date} date
 * @returns {string}
 */
const formatISOTime = (date) =>
  `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

const EventPage = () => {
  const [events, setEvents] = React.useState(
    /** @type {RichEvent[] | null} */ (null)
  );

  React.useEffect(() => {
    (async () => {
      try {
        /** @type {[EventsResponse, CategoriesResponse]} */
        const [
          { events },
          {
            category_list: { categories },
          },
        ] = await Promise.all([
          fetch(
            "https://discuss.kalk.space/discourse-post-event/events.json"
          ).then((r) => r.json()),
          fetch(
            "https://discuss.kalk.space/categories.json?include_subcategories=true"
          ).then((r) => r.json()),
        ]);

        const categoryDB = new Map(
          categories.flatMap(flattenCategories).map((c) => [c.id, c])
        );

        const futureEvents = events
          .filter(function (event) {
            // use yesterday's date for comparison so we don't filter out currently running events
            const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
            return new Date(event.starts_at) > yesterday;
          })
          .map((event) => ({
            ...event,
            category: categoryDB.get(event.category_id),
          }));

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
      } catch (e) {
        console.error(e);
      }
    })();
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
      <div className={styles.masonry}>
        {events?.map((event, i) => {
          const date = new Date(event.starts_at);
          return (
            <ContentBox
              innerClassName={styles.event}
              mode={i % 2 === 0 ? "Left" : "Right"}
              masonry
            >
              <p
                className={styles.category}
                style={{ borderColor: `#${event.category?.color}` }}
              >
                {event.category?.name}
              </p>
              <a
                className={styles.title}
                href={"https://discuss.kalk.space/" + event.post.url}
              >
                {event.post.topic.title}
              </a>
              <p className={styles.date}>
                <time dateTime={formatISODate(date)}>
                  {date.toLocaleString("de", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </time>
                <time dateTime={formatISOTime(date)}>
                  {date.toLocaleString("de", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </p>
            </ContentBox>
          );
        })}
      </div>
      <ContentBox>
        <p>
          Du kannst diese Events auch in deinem persönlichen Kalender anzeigen
          lassen. Kopiere dafür die folgende URL und richte ein Abonnement ein.
        </p>
        <ClipboardCopyBox text={icsUrl} />
      </ContentBox>
    </Layout>
  );
};

export default EventPage;
