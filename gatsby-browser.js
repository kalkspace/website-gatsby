import { Link } from "gatsby";
import React from "react";

import { LinkProvider } from "./src/components/header/header";

import "modern-normalize/modern-normalize.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "./src/styles/typo.css";

/** @type {import("gatsby").GatsbyBrowser["wrapPageElement"]} */
export const wrapPageElement = ({ element }) => {
  return <LinkProvider value={Link}>{element}</LinkProvider>;
};
