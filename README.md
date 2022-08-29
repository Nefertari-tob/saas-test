## 项目核心架构结构

```js
|-- SAAS-2.0
    |-- .husky
    |-- node_module
    |-- packages
    |   |-- form-app
    |   |   |-- node_module
    |   |   |-- dist
    |   |   |-- public
    |   |   |-- src
    |   |   |   |-- api
    |   |   |   |   |-- ...
    |   |   |   |-- assest
    |   |   |   |   |-- ...
    |   |   |   |-- components
    |   |   |   |   |-- ...
    |   |   |   |-- router
    |   |   |   |   |-- ...
    |   |   |   |-- store
    |   |   |   |   |-- ...
    |   |   |   |-- utils
    |   |   |   |   |-- ...
    |   |   |   |-- views
    |   |   |   |   |-- ...
    |   |   |   |-- App.vue
    |   |   |   |-- main.ts
    |   |-- m-form-app
    |   |   |-- node_module
    |   |   |-- dist
    |   |   |-- public
    |   |   |-- src
    |   |   |   |-- api
    |   |   |   |   |-- ...
    |   |   |   |-- assest
    |   |   |   |   |-- ...
    |   |   |   |-- components
    |   |   |   |   |-- ...
    |   |   |   |-- router
    |   |   |   |   |-- ...
    |   |   |   |-- store
    |   |   |   |   |-- ...
    |   |   |   |-- utils
    |   |   |   |   |-- ...
    |   |   |   |-- views
    |   |   |   |   |-- ...
    |   |   |   |-- App.vue
    |   |   |   |-- main.ts
    |-- .babelrc
    |-- .browserslistrc
    |-- .eslintrc.js
    |-- .gitignore
    |-- babel.config.js
    |-- lerna-debug.log
    |-- lerna.json
    |-- lint-staged.config.js
    |-- package-lock.json
    |-- package.json
    |-- projects.js
    |-- README.md
    |-- shims-vue.d.ts
    |-- tsconfig.json
    |-- vue.config.js
    |-- yarn.lock
```

## 主要命令

```js
    // 包安装
    lerna bootstrap
    // 启动
    yarn serve:pc// form-app         
    yarn serve:mobile// m-form-app     
    // 打包
    yarn build:pc // form-app        
    yarn build:mobile// m-form-app    
```

## 项目分包

两个项目共一套用配置文件
