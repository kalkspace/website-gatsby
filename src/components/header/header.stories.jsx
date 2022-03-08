import React from "react";

import { Header } from "./header";

export default {
  title: "Header",
  component: Header,
};

/** @type {import('@storybook/react').Story<{}>} */
const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MenuOpen = Template.bind({});
MenuOpen.args = { menuOpen: true };
