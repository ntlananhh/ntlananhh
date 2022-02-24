
  const path = require('path'); 
  const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
  const postcss = require('postcss') 
   
  module.exports = {
    entry: ['./src/script1.js', './src/script2.js'],
    output: {
      filename: "index.bundle.js"
    },
    plugins: [ 
      new MiniCssExtractPlugin(), 
    ], 
    module: { 
      rules: [ 
        { 
          test: /\.css$/, 
          use: [MiniCssExtractPlugin.loader, { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1 
            } 
          }, 
          { 
            loader: 'postcss-loader', 
            options: { 
              postcssOptions: { 
                ident: 'postcss', 
              } 
            } 
          } 
          ], 
        }, 
      ], 
    }, 



    // rules:[
    //     {
    //         test: /\.css$/i,
    //         use:[
    //             "style-loader",
    //             "css-loader"
    //         ]
    //     },
    //     {
    //         test: /\.(png|jpg|gif)$/i,
    //         use:[{
    //             rules: "url-loader",
    //             options:{
    //                 limit:8192
    //             }
    //         }
                
    //         ]
    //     },

    // ],
    
    // loaders: [
    //     {
    //       test: /\.js$/,
    //       exclude: /node_modules/,
    //       rules: 'babel-loader',
    //     //   query: {
    //     //     presets: ['react', 'es2015']
    //     //   }
    //     },

    //   ]
    resolve: {
      extensions: ['', '.js']
    },
   }
   