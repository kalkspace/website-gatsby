import { graphql, Link } from "gatsby";
import React from "react";

import { Layout } from "../components/layout/layout";
import { ContentBox, MODE } from "../components/content-box/content-box";

import * as styles from "./blog.module.css";

/** @typedef {{
 nodes: {
  id: string,
  frontmatter: {
    date: string,
    title: string,
    teaser: {
      src: {
        publicURL: string
      }
      alt?: string
    } | null,
  }
  fields: {
    urlPath: string,
  },
  excerpt: string
 }[]
}} BlogPostList */

/**
 * @param {string} dateStr
 * @returns {string}
 */
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};

/** @type {React.FC<import("gatsby").PageProps<{ allMdx: BlogPostList }>>} */
const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes.map(
    ({ fields, frontmatter, id, excerpt }) => (
      <Link to={fields.urlPath} key={id}>
        <ContentBox innerClassName={styles.post} mode={MODE.Full}>
          {frontmatter.teaser && (
            <img
              className={styles.teaser}
              src={frontmatter.teaser.src.publicURL}
            />
          )}
          <div>
            <p>{formatDate(frontmatter.date)}</p>
            <h3>{frontmatter.title}</h3>
            <p>{excerpt}</p>
          </div>
        </ContentBox>
      </Link>
    )
  );
  return (
    <Layout>
      <h1>Neues vom KalkSpace</h1>
      <div className={styles.list}>{posts}</div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          date
          title
          teaser {
            src {
              publicURL
            }
            alt
          }
        }
        fields {
          urlPath
        }
        excerpt
      }
    }
  }
`;
