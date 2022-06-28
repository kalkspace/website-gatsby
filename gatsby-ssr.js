const { Link } = require("gatsby");
const React = require("react");
const { LinkProvider } = require("./src/components/header/header");

/** @type {import("gatsby").GatsbySSR["wrapPageElement"]} */
exports.wrapPageElement = ({ element }) => {
  return <LinkProvider value={Link}>{element}</LinkProvider>;
};
