module.exports = {
  plugins: ["prettier", "jest", "@typescript-eslint", "cypress"],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:cypress/recommended"
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
    },
  },
  rules: {
    // Imports
    "import/default": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "./src/**/*",
            from: "./node_modules/**/src/**/*",
            message: "Do not import package sources",
          },
        ],
      },
    ],

    // Typescript
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],

    // React
    "react/jsx-curly-brace-presence": [
      "error",
      { propElementValues: "always" },
    ],
    "react/jsx-boolean-value": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",

    // General
    // buggy one, so disable
    "no-use-before-define": "off",
    "prefer-template": "warn",

    // Prettier
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: ["*.+(ts|tsx)"],
      excludedFiles: ["*.+(stories|test).+(ts|tsx)"],
    },
  ],
};
