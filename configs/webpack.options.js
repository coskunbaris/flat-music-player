const Options = {
  source: "src",
  dist: "dist",

  htmlPages: {
    home: {
      template: "src/views/index.pug",
      filename: "index.html"
    }
  },

  htmlAttrs: [
    // Tag attributes to importing image files
    ":src",
    ":srcset",
    ":data-src",
    ":data-srcset",
    ":data-webpack",
    ":link:type!=stylesheet"
  ],

  pugPretty: true,

  postCss: {
    test: /\.css$/,
    loader: "postcss-loader",
    sourceMap: true
  },

  babelPresets: ["env", "react", "flow"],

  extractCss: true,

  styleSourceMap: true,

  dashboardPort: 1337
};

module.exports = Options;
