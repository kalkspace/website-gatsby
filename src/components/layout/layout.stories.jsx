import { Layout } from "./layout";

import interior from "../../images/kalkspace_interior1.jpg";

export default {
  title: "Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
};

/** @type {import('@storybook/react').Story<{}>} */
const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  heroImg: <img src={interior} alt="KalkSpace von innen" />,
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
    </>
  ),
};
