import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/layout/layout";
import { ContentBox, MODE } from "../components/content-box/content-box";

/** @type {React.FC<{ data: any }>} */
const BlogPost = (props) => {
  return (
    <Layout>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <ContentBox mode={MODE.Full}>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </ContentBox>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
