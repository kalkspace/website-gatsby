import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

/** @type {React.FC<{ data: any }>} */
const BlogPost = (props) => {
  return (
    <>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </>
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
