const path = require("path");
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
/** @type {import("gatsby").GatsbyNode["createPages"]} */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMdx {
          nodes {
            id
            frontmatter {
              date
              slug
              title
            }
            slug
            body
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  result.data.allMdx.nodes.forEach((post) => {
    const path = post.frontmatter.slug || post.slug;
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: post.id,
      },
    });
  });
};

/** @type {import("gatsby").GatsbyNode["onCreateWebpackConfig"]} */
exports.onCreateWebpackConfig = ({ getConfig, stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    const config = getConfig();
    actions.setWebpackConfig({
      externals: [
        {
          canvas: "commonjs canvas",
        },
        ...config.externals,
      ],
    });
  }
};
