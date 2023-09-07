import { defineConfig } from "cypress";
// import webpackConfig from './config/webpack.config';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      // webpackConfig,
    },
  },
  env: {
    NODE_ENV: 'test',
  },
});
