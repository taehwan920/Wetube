// webpack은 ES5이전의 바닐라 자바스크립트로 해야함.

const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");


const MODE = process.env.WEBPACK_ENV; //process.env.뒤엔 package.json의 script부분에서 쓴 그것과 똑같이 쓸 것.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(scss)$/,      // scss파일을 전부 찾고, 그걸 css로 바꿈
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    }
};

module.exports = config;