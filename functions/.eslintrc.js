module.exports = {
  env: {
    es2021: true,
    node: true,   // 👈 important: tells ESLint you're in Node.js
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
