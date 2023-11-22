const path = require("path");

/** @type {import("gatsby").GatsbyNode["onCreateNode"]} */
exports.onCreateNode = async ({
  actions: { createNodeField },
  node,
  getNode,
}) => {
  if (node.internal.type === "Mdx") {
    if (!node.parent) {
      return;
    }

    const post =
      /** @type {import("gatsby").Node & { frontmatter: { slug?: string }, slug: string }} */ (
        node
      );

    let slug = post.frontmatter.slug;
    if (!slug) {
      const fileNode = getNode(node.parent);
      if (!fileNode) {
        return;
      }
      if (fileNode.name === "index") {
        slug = /** @type {string} */ (fileNode.relativeDirectory);
      } else {
        slug = /** @type {string} */ (fileNode.name);
      }
    }
    const path = `/blog/${slug}`;

    createNodeField({ node, name: "urlPath", value: path });
  }
};

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
            fields {
              urlPath
            }
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
    createPage({
      path: post.fields.urlPath,
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
  const config = getConfig();
  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          resourceQuery: "?asset",
          type: "asset/resource",
        },
        ...config.module.rules,
      ],
    },
  };
  if (stage === "build-html" || stage === "develop-html") {
    newConfig.externals = [
      {
        canvas: "commonjs canvas",
      },
      ...config.externals,
    ];
  }
  actions.replaceWebpackConfig(newConfig);
};
