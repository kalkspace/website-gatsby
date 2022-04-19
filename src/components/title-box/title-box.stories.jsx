import React from "react";
import { TitleBox } from "./title-box";

export default {
  title: "Title Box",
  component: TitleBox,
  argTypes: {
    pink: {
      control: {
        type: "boolean",
      },
    },
  },
};

const defaultTitles = ["hack", "coworking", "community"];

/** @type {import('@storybook/react').StoryFn<Partial<React.ComponentProps<typeof TitleBox>>>} */
const Template = (args) => <TitleBox titles={defaultTitles} {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MoreTitles = Template.bind({});
MoreTitles.args = {
  titles: ["coworking", "chill", "hacker", "hackerin", "sofa"],
};

export const Slow = Template.bind({});
Slow.args = {
  animationIntervalMs: 4000,
};

export const Pink = Template.bind({});
Pink.args = {
  pink: true,
};
