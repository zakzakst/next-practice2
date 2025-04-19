import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="styles/globals.css" />
  `,
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    const imageRule = config.module.rules.find((rule) =>
      rule?.["test"]?.test(".svg")
    );
    if (imageRule) {
      imageRule["exclude"] = /\.svg$/;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default config;
