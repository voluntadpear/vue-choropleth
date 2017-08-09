const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const merge = require("webpack-merge")
const commonConfig = {
  context: path.resolve(__dirname, ".."),
  output: {
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // important: exclude files in node_modules, otherwise it's going to be really slow!
        exclude: /node_modules|vendor/
      }
    ]
  },
  externals: [
    {
      vue: {
        umd: "Vue",
        global: "Vue",
        root: "Vue",
        commonjs2: "vue",
        commonjs: "vue",
        amd: "vue"
      }
    }
  ],
  resolve: {
    extensions: [".js", ".vue"]
  },
  plugins: [
    // The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true
    })
  ]
}

module.exports = [
  // for browser enviroment
  merge(commonConfig, {
    entry: path.resolve(__dirname, "../src/plugin"),
    output: {
      filename: "vue-choropleth.min.js",
      library: "ChoroplethMap",
      libraryTarget: "window"
    },
    devtool: "#source-map"
  }),

  // for node
  merge(commonConfig, {
    entry: path.resolve(__dirname, "../src/main"),
    output: {
      filename: "vue-choropleth.js",
      library: "VueChoropleth",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: [
      {
        leaflet: {
          umd: "L",
          root: "L",
          global: "L",
          commonjs2: "leaflet",
          commonjs: "leaflet",
          amd: "leaflet"
        }
      }
    ],
    devtool: "#source-map"
  })
]
