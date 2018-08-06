# webpack-exercise
Solving some issues with webpack

To run this:

1. Run from terminal, main directory
    npm init -y 
   to have a package.json
2. Install webpack
    npm install webpack --save-dev
3. Install css and sass loaders
    npm install css-loader --save-dev
    npm install style-loader --save-dev
    npm install sass-loader node-sass --save-dev  
4. Install extract text plugin for sass=>css
    npm install --save-dev extract-text-webpack-plugin
    npm i -D extract-text-webpack-plugin@next
5. To clean the destination folder before copy, you will need this:
    npm i clean-webpack-plugin --save-dev
6. For the copied img dir install
    npm i -D copy-webpack-plugin
7. Run from terminal
    npm run dev