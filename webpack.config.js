// ===========================VARIABLES===========================
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractSCSS = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FontelloPlugin = require("fontello-webpack-plugin");
// =========================MAIN AREA=============================
module.exports = {
// =============================WebPackServer AND SourceMap==================
  devtool: 'cheap-module-source-map',
  devServer : {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback:true,
    compress: true,
    port: 5000
  },
  //---------------------------ENTRY/EXIT POINT------------------------------ 
   entry : './src/js/index.js',
   output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js',
    },
// =============================MODULES===========================
    module : {
// ------------------------SASS/CSS TASK------------------- 
      rules: [
        {
          test: /\.scss$/,
          use: ExtractSCSS.extract({
            fallback: 'style-loader',
            // To understand CSS inside JS
            use: [{
              loader: "css-loader", 
              options:{
                sourceMap: true,
                outputPath: 'dist/'
              }
            },
            //  For Prefixing CSS properties
            { 
              loader: 'postcss-loader', 
              options: { 
                sourceMap: true
               }
            },
            // For Convertind SCSS TO CSS
            {
              loader: "sass-loader", 
              options:{
                sourceMap: true,
                outputPath: 'dist/'
              }
            }]
          })
        },
// -----------------------BABEL/React TASK----------------- 
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        }, 
// -----------------------HTML TASK-----------------        
        {
          test: /\.html$/,
          use: ['html-loader']
        },
// -----------------------IMG TASK-----------------        
        {
          test: /\.(png|jpeg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath:'img/', 
              }  
            }
          ]
        },
// -----------------------Font TASK-----------------        
        // {
        //   test: /\.(ttf|eot|svg|)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        //   use: {
        //     loader: 'file-loader',
        //     options:
        //     {
        //         name: '[name].[ext]',
        //         outputPath:'fonts/'
        //     }
        //   }
        // },
        // {
        //   test:  /\.(woff|woff2)$/,
        //   use: {
        //     loader: 'url-loader',
        //     options:
        //     {
        //         name: '[name].[ext]',
        //     }
        //   }   
        // }
      ]
    },
// ==================================PLUGINS=================================
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html' // Load a index template (ejs by default see the FAQ for details) 
       }),
       new ExtractSCSS({
        filename: 'css/[name].css',
       }),
       new webpack.ProvidePlugin({
        $: 'jquery', 
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'], 
      }),
      new CopyWebpackPlugin([{
        from: path.join(__dirname,'node_modules','bootstrap','dist','css','bootstrap.min.css'),
        to:'css'
      }]),
      new CopyWebpackPlugin([{
        from: path.join(__dirname,'src','fonts'),
        to:'fonts'
      }]) 
    ],
}


