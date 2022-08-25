const config = {
  pc: {
    pages: {
      index: {
        entry: "./packages/form-app/src/main.ts",
        template: "./packages/form-app/public/index.html",
        filename: "index.html",
        chunks: [
          "chunk-libs",
          "chunk-vendors",
          "chunk-commons",
          "chunk-elementUI",
          "index",
          "runtime",
          "manifest",
        ],
      },
    },
  },
  mobile: {
    pages: {
      index: {
        entry: "./packages/m-form-app/src/main.ts",
        template: "./packages/m-form-app/public/index.html",
        filename: "index.html",
        chunks: [
          "chunk-libs",
          "chunk-vendors",
          "chunk-commons",
          "chunk-elementUI",
          "index",
          "runtime",
          "manifest",
        ],
      },
    },
  },
  projectC: {},
};

module.exports = config;
