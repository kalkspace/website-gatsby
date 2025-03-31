import React from "react";
import { Map } from "./map";
import styles from "./map.stories.module.css";

export default {
  title: "Map",
  component: Map,
};

/** @type {import('@storybook/react').Story<React.ComponentProps<import('./map').Map>>} */
const Template = (args) => (
  <div style={{ height: "400px" }}>
    <Map {...args} />
  </div>
);

export const Default = Template.bind({});
/** @type {React.ComponentProps<import('./map').Map>} */
Default.args = {
  position: [50.940569, 7.019904],
  zoom: 16,
  mapClassName: styles.mapContainer,
  scrollWheelZoom: false,
};

export const WithPopup = Template.bind({});
/** @type {React.ComponentProps<import('./map').Map>} */
WithPopup.args = {
  position: [50.940569, 7.019904],
  zoom: 16,
  mapClassName: styles.mapContainer,
  scrollWheelZoom: false,
  popupText: "Innenhof, dann nach rechts. Dritte Tür.",
};
