import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import path from "path";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssNormalize from "postcss-normalize";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
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
