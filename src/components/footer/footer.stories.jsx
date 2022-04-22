import React from "react";

import { Footer } from "./footer";

export default {
  title: "Footer",
  component: Footer,
};

/** @type {import('@storybook/react').Story<{}>} */
const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
