module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        semi: false,
        printWidth: 120,
      },
    ],
    "no-console": "error",
  },

  plugins: ["@typescript-eslint"],
  ignorePatterns: ["lib"],
}
