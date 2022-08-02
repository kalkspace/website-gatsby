import React from "react";

import { ContentBox, MODE } from "../components/content-box/content-box";
import { Layout } from "../components/layout/layout";

/** @type {React.FC<{ data: any }>} */
const ContentPage = ({ children }) => {
  return (
    <Layout>
      <ContentBox mode={MODE.Full}>{children}</ContentBox>
    </Layout>
  );
};

export default ContentPage;
