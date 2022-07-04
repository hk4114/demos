# 边学边练 react

## 配置项目

[antd 在 TypeScript 中使用](https://ant.design/docs/react/use-in-typescript-cn)

> Using ESLint with Create React App and Prettier

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-react eslint-plugin-prettier prettier
```

Ctrl+Shift+P -> `>settings` -> update json

```json
"[typescript]": {
  "editor.formatOnSave": true,
  "editor.tabSize": 2
},
"[typescriptreact]": {
  "editor.formatOnSave": true
},
"eslint.enable": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
],
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

eslint

```sh
npx eslint --init
# syntax only
# import/export
# React
# typescript
# browser node 按a全选
# json
# yes
```

```json
// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "globals": {
    "JSX": "readonly",
    "React": "readonly",
    "NodeJS": "readonly"
  },
  "extends": ["plugin:react/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier", "react-hooks"],
  "rules": {}
}

// .prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "arrowParens": "avoid"
}
// npx prettier --write .
```


## 熟悉 react api - Cart

