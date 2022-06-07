import React from "react";
import { TitleAnimator, TitleBox } from "./title-box";

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

/** @type {import('@storybook/react').StoryFn<Partial<React.ComponentProps<typeof TitleBox> & React.ComponentProps<typeof TitleAnimator>>>} */
const Template = ({ titles, animationIntervalMs, ...args }) => (
  <TitleBox {...args}>
    <TitleAnimator
      titles={titles ?? defaultTitles}
      animationIntervalMs={animationIntervalMs}
    />
  </TitleBox>
);

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

/** @type {import('@storybook/react').StoryFn<{ caption: string }>} */
export const NoAnimation = ({ caption }) => <TitleBox>{caption}</TitleBox>;
NoAnimation.args = {
  caption: "Hallo Welt!",
};
