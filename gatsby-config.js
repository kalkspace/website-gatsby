module.exports = {
  siteMetadata: {
    title: `KalkSpace`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/blog",
      },
      __key: "blog",
    },
  ],
};
