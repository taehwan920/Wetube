// webpack은 ES5이전의 바닐라 자바스크립트로 해야함.

const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");


const MODE = process.env.WEBPACK_ENV; //process.env.뒤엔 package.json의 script부분에서 쓴 그것과 똑같이 쓸 것.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,     // entry와 output을 지정.
    mode: MODE,
    module: {               //***module 파트의 의미 :  // 이번엔 scss파일을 전부 찾고, 그걸 css로 바꾸고, 전체 텍스트 중 그 css의 텍스트를 추출하고, 추출된 css를 분리된 파일로 만드는 작업. -> 다른 파일 포맷을 위한 특정 변환 룰.
        rules: [                //*** 다음과 같은 rules를 따를것.
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                test: /\.(scss)$/,  //*** 어떤 조건을 알아보라(test)는 것. 즉 .scss파일을 만나게 되면 다음과 같은 plugin을 사용하도록.(use부분)
                use: ExtractCSS.extract([                   //***이 plugin은 내부에서 또 plugin을 사용중. SCSS를 일반 CSS로 통역해야해서.
                    {
                        loader: "css-loader" //***얘는 webpack이 CSS를 이해할수 있게 해주는 애
                    },
                    {
                        loader: "postcss-loader",   //***얘는 우리가 주는 plugin을 받아서 CSS를 포맷(or브라우저)에 맞춰 변환해주어 호환성을 해결해줌.
                        options: {
                            plugin() {
                                return [autoprefixer({ browsers: "cover 99.5%" })] // 리턴값 안에 있는건 현존하는 브라우저의 99.5%와 호환되게 해주는 옵션.
                            }
                        }
                    },
                    {
                        loader: "sass-loader"  //***얘가 SCSS를 일반 CSS로 바꿔줌.
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;