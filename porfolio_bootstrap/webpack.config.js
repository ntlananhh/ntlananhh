
  module.exports = {
    entry: ['./src/script1.js', './src/script2.js'],
    output: {
      filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        [
                          "postcss-preset-env",
                          {
                            // Options
                          },
                        ],
                      ],
                    },
                  },
                },
              ],
            },
          ],



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
    },
    resolve: {
      extensions: ['', '.js']
    },
   }
   