import gulp from "gulp";
import path from "path";
import { readFile,writeFile } from "fs/promises";
import rename from "gulp-rename";
import del from "del";
import camelcase from "camelcase";
import glob from 'glob'

import { svgo } from "./plugins/svgo.js";
import { customTransformStreamFn } from "./plugins/through.js";
import { format } from "prettier";

gulp.task("clean", function () {
    return del(["packages/vue/src/icons/*"]);
});
const formatCode = (code) => {
    return format(code, {
        parser: "vue",
        semi: true,
        singleQuote: true,
    });
};
function getComponentName() {}
function isSvgStartTag(str) {
    const regex = /<svg/;
    return regex.test(str);
}
function isPathStartTag(str) {
    const regex = /<path/;
    return regex.test(str);
}
function replaceFillAttr(str) {
    const regex = /fill="#([a-fA-F0-9]{6})"/g; 
    return str.replace(regex, ':fill="color"');
}
function replaceSize(str) {
    const regExp = /(width|height)="(\d+)px"/g;
    return str.replace(regExp, ':$1="size"');
}
function removeQuotesAndBrackets(str) {
    // 匹配字符串中的引号和括号
    const regExp = /["'()]/g;
    // 替换引号和括号为空字符串
    return str.replace(regExp, '');
  }
function generateSVGfn() {
    return customTransformStreamFn(async (bufferString, basename) => {
        const lines = bufferString.split("\n");
        const componentName = camelcase(basename, { pascalCase: true });
        let newStr = "";
        lines.forEach((line, index) => {
            if (isSvgStartTag(line)) {
                newStr += replaceSize(line) + `\n`;
            } else if (isPathStartTag(line)) {
                newStr += replaceFillAttr(line) + "\n";
            } else {
                newStr += line + `\n`;
            }
        });
        try {
            const vue = formatCode(
                `<template>
                    ${newStr}
                </template>
                <script lang='ts'>
                    import {defineComponent} from 'vue'
                    export default defineComponent({
                        name:"${componentName}",
                        props: {
                            size:Number,
                            color:String
                        }
                    })
                </script>
                `
            );
            return vue;
        } catch (err) {
            console.log(err);
        }
    }, true);
}
function generateVueIconEntry () {
    return glob('packages/vue/src/icons/*.vue',(err,files)=> {
        const code = files.map((file)=>{
            const componentName = path.basename(file).replace('.vue','')
            return `export {default as ${componentName}} from './icons/${componentName}.vue'`
        }).join('\n')
        console.log(code)

        writeFile('packages/vue/src/index.ts',code,'utf-8')
    })
}
function formatBasename(str) {
    const formatName = str.replace(/_/g, "-").replace(/["'()]/g,'').replace(/\d/g, function (match) {
        var words = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];

        return "-" + words[Number(match)];
    });
    return camelcase(formatName, { pascalCase: true });
}
function generateVueIcon() {
    return gulp
        .src("source/*.svg")
        .pipe(generateSVGfn())
        .pipe(
            rename((file) => {
                file.basename = formatBasename(file.basename);
                file.extname = ".vue";
            })
        )
        .pipe(gulp.dest("packages/vue/src/icons"));
}

export default gulp.series("clean", generateVueIcon,generateVueIconEntry);
