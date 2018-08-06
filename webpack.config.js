var webpack = require('webpack');

var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');





module.exports = {

    entry: {


        app: [


            './src/assets/sass/purestrap.sass'

        ],

    },

    output: {

        path: path.resolve(__dirname, './public')

    },

    module: {

        rules: [

            {

                test: /\.s[ac]ss$/,

                use: ExtractTextPlugin.extract({

                    use: ['css-loader', 'sass-loader'],

                    fallback: 'style-loader'

                })

            },

            {
                test: /\.css$/,

                use: 'css-loader'

            },

        ]
    },

    plugins: [

        new ExtractTextPlugin('assets/style.css'),

        new CleanWebpackPlugin(['public/img/*.*','public/app.js']),

        new CopyWebpackPlugin([
            {
                from: './src/assets/img',
                to: './img'
            }
            ])


    ]

};



