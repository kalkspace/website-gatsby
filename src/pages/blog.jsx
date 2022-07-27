import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { formatDate } from "../utils/date";

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
        childImageSharp: import("gatsby-plugin-image/dist/src/components/hooks").IGatsbyImageDataParent<{}>
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

/** @type {React.FC<import("gatsby").PageProps<{ allMdx: BlogPostList }>>} */
const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes.map(
    ({ fields, frontmatter, id, excerpt }) => {
      const image = frontmatter.teaser?.src?.childImageSharp?.gatsbyImageData;
      return (
        <Link to={fields.urlPath} key={id}>
          <ContentBox innerClassName={styles.post} mode={MODE.Full}>
            {image && (
              <GatsbyImage
                className={styles.teaser}
                image={image}
                alt={frontmatter.teaser?.alt ?? ""}
              />
            )}
            <div>
              <p>{formatDate(frontmatter.date)}</p>
              <h3>{frontmatter.title}</h3>
              <p>{excerpt}</p>
            </div>
          </ContentBox>
        </Link>
      );
    }
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
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 256)
              }
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
