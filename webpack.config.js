// webpack은 ES5이전의 바닐라 자바스크립트로 해야함.

const path = require("path");

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ENTRY_FILE,
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    }
};

module.exports = config;