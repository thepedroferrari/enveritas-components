import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssNormalize from "postcss-normalize";
import postcssPresetEnv from "postcss-preset-env";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
      css: {
        postcss: {
          plugins: [
            postcssFlexbugsFixes,
            postcssPresetEnv({
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
            }),
            postcssNormalize(),
          ],
        },
      },
    });
  },
};
export default config;
