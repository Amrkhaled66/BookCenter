import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
    },
    rules: {
      "import/no-unresolved": ["error", { caseSensitive: true }],
      "import/extensions": "off", // <- Add this line
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
];
