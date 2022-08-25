const { defineConfig } = require("@vue/cli-service");
const projectsConfig = require("./projects");
const path = require("path");

const projectName = process.env.VUE_APP_PROJECT_NAME;
console.log(projectName);

function resolve(dir) {
  //此处使用path.resolve 或path.join 可自行调整
  const src =
    projectName === "pc" ? "./packages/form-app/" : "./packages/m-form-app/";
  console.log(path.join(__dirname, src + dir));
  return path.join(__dirname, src + dir);
}
function output(projectName) {
  const src =
    projectName === "pc"
      ? "./packages/form-app/dist/"
      : "./packages/m-form-app/dist/";
  return path.join(__dirname, src);
}
module.exports = defineConfig({
  outputDir: output(projectName),
  publicPath: "./",
  ...projectsConfig[projectName],
  // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    port: 8080, // 端口地址
    open: true, // 是否自动打开浏览器页面
    host: "localhost", // 指定使用一个 host，默认是 localhost
    // https: false, // 使用https提供服务
    historyApiFallback: true,
    // allowedHosts: 'all',
    // 设置代理
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/schema": {
        target: "http://192.168.1.20:3000",
        changeOrigin: true,
        ws: true,
      },
      "/api": {
        target: "http://baidu.com",
        changeOrigin: true,
        ws: true,
      },
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
  // 配置别名
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
    // 这里只写了这一个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
});
