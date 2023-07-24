module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/prop-types": "off",
    quotes: ["error", "double"],
    "space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off"

  }
}
