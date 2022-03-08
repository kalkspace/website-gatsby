import React from "react";

import { GenerativeStarBackground } from "./stars";
import StyleGuide from "../../styles/styleguide.mdx";

export default {
  title: "GenerativeStarBackground",
  component: GenerativeStarBackground,
};

/** @type {import('@storybook/react').Story<{}>} */
const Template = (args) => <GenerativeStarBackground {...args} />;

export const Default = Template.bind({});
Default.args = {}

export const WithContent = Template.bind({});
WithContent.args = {
  children: <StyleGuide />
}
