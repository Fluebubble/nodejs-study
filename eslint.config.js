import globals, { node } from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    env: {
      node: true,
    },
  },
  pluginJs.configs.recommended,
];
