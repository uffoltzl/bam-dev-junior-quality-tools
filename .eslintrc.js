module.exports = {
  ignorePatterns: [
    "node_modules",
    ".yarn", // yarn 3
    "android", // react-native
    "ios", // react-native
    ".cache", // tsc/eslint/metro cache
    "coverage", // jest
    "dist", // expo updates
    ".expo-shared",
    ".expo",
  ],
  plugins: ["react-native"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-native/all", // Enables all rules from react-native
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-return-await": "error",
    "react/no-unstable-nested-components": "error",
    "react/prop-types": "off",
    "react-native/sort-styles": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-native/no-raw-text": ["error", { skip: ["Trans"] }],
    "react-hooks/exhaustive-deps": "error",
    "react-native/no-color-literals": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    "react-native/react-native": true,
  },
  // Glob based definitions
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
        // Note: disable the base rule as it can report incorrect errors
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
