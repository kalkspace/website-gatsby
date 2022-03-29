import React from "react";

import { Button } from "../button/button";
import { ContentBox, MODE } from "./content-box";
import { Layout } from "../layout/layout";

import exampleImage from "../../images/kalkspace_sternenposter.jpg";

export default {
  title: "Content Box",
  component: ContentBox,
  argTypes: {
    mode: { control: { type: "select", options: Object.values(MODE) } },
  },
};

const DEMO_CONTENT = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua.
    </p>
    <Button label="Hallo!" />
  </>
);

/** @type {import('@storybook/react').Story<{}>} */
const Template = (args) => <ContentBox children={DEMO_CONTENT} {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Left = Template.bind({});
Left.args = {
  mode: MODE.left,
};

export const RightWithImage = Template.bind({});
RightWithImage.args = {
  mode: MODE.right,
  sideImage: <img src={exampleImage} />,
};

/** @type {import('@storybook/react').Story<{}>} */
const LayoutTemplate = (args) => (
  <Layout>
    <ContentBox children={DEMO_CONTENT} {...args} />
  </Layout>
);

export const InLayout = LayoutTemplate.bind({})
InLayout.args = {
  mode: MODE.right,
  sideImage: <img src={exampleImage} />,
};
InLayout.parameters = {
  layout: "fullscreen",
}
