const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash][ext]',
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },

        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          },
          exclude: '/node_modules/',
        },
      ],
    },
    resolve: {
    extensions: ['.jsx', '.js'],
    },
  devtool: 'inline-source-map',
    devServer: {
    port: 3001,
      open: true
  },


}
}

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// module.exports = {
//   entry: { main: './src/pages/index.js' },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//         publicPath: ''
//   },
//   mode: 'development',
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//     compress: true, 
//     port: 8080, 

//     open: true 
//   },

//   module: {
//     rules: [ 
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: '/node_modules/'
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         type: 'asset/resource',
//         generator: {
//           filename: 'images/[name].[hash][ext]',
//         }
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf)$/,
//         type: 'asset/resource',
//         generator: {
//           filename: 'fonts/[name].[hash][ext]',
//         }
//       },
//       {
//         test: /\.s(a|c)ss$/,
//         use: [MiniCssExtractPlugin.loader, {
//           loader: 'css-loader',
//           options: { importLoaders: 1 }
//         },
//         'sass-loader']
//       }

//     ]
//   },
//   plugins: [ 
//     new HtmlWebpackPlugin({
//     template: './src/index.html'
//   }),
//   new CleanWebpackPlugin(),
//   new MiniCssExtractPlugin()
//   ]

// }