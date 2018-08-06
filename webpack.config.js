var webpack = require('webpack');

var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {

    entry: {


        app: [


            './src/assets/sass/purestrap.sass'

        ],

        //vendor: ['jquery']


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

        new ExtractTextPlugin('[name].css')

    ]

};


