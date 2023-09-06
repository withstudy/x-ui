module.exports = {
    plugins: ["stylelint-prettier"],
    extends: [
        "stylelint-config-standard",
        "stylelint-config-recess-order",
        "stylelint-config-standard-scss",
    ],
    "overrides": [
      {
        "files": ["*.html", "**/*.html"],
        "customSyntax": "postcss-html"
      }
    ],
    // 配置 rules
    rules: {
        // 开启 Prettier 自动格式化功能
        "prettier/prettier": true,
        "selector-class-pattern": null,
        "scss/dollar-variable-pattern": null,
        "no-empty-source": null,
    },
};
