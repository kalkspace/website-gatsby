module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    const styleLoader = require.resolve("style-loader");
    const cssRule = config.module.rules.find(
      (rule) => rule.use?.[0] == styleLoader
    );
    cssRule.use = [
      {
        loader: styleLoader,
        options: {
          esModule: true,
          modules: {
            namedExport: true,
          },
        },
      },
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          esModule: true,
          modules: {
            namedExport: true,
          },
        },
      },
    ];
    // Return the altered config
    return config;
  },
};
