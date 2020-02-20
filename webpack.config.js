const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // minimize file javascript for version old
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // minimize file css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  return {
    entry: {
      bootstrap: './src/assets/js/bootstrap_config.js',
      fontsawesome: './src/assets/js/fontsawesome_config.js',
      main: './src/index.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'js/[contenthash].bundle.js',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            // fallback to style-loader in development
            options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            // fallback to style-loader in development
            options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        // url-loader image
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        //file-loader image
        // {
        //   test: /\.(png|jpe?g|gif)$/i,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         outputPath: "images",
        //         name: "[name].[ext]"
        //       }
        //     }
        //   ]
        // },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // có 2 cách [config ***] file: 1 là dùng outPath và name | 2 là dùng name như ở dưới cho tiện
                outputPath: 'fonts',
                name: '[name].[ext]',
                // [config ***] dùng  [opntion name] để quản lý được các tập tin sẽ đặt ở đau sau khi load
                // name: 'image/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'css/[contenthash].css',
        chunkFilename: 'css/[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    ],
  };
};
