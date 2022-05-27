// @ts-check
const path = require('path');
const getResolveAlias = require('@fluentui/scripts/webpack/getResolveAlias');
const resources = require('@fluentui/scripts/webpack/webpack-resources');
const { addMonacoWebpackConfig } = require('@fluentui/react-monaco-editor/scripts/addMonacoWebpackConfig');

const BUNDLE_NAME = 'demo-app';
const outDirRelative = 'dist/demo';
const outDir = path.join(__dirname, outDirRelative);

module.exports = resources.createServeConfig(
  addMonacoWebpackConfig(
    {
      entry: {
        [BUNDLE_NAME]: ['react-app-polyfill/ie11', './src/index.tsx'],
      },

      resolve: {
        alias: getResolveAlias(),
      },
    },
    { outDir },
  ),
  outDirRelative,
);
