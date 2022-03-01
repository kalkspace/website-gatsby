import React from "react";

import { GenerativeStarBackground } from "./stars";

export default {
  title: "GenerativeStarBackground",
  component: GenerativeStarBackground,
};

const Template = (args) => <GenerativeStarBackground {...args} />;

export const Default = Template.bind({});
Default.args = {}
