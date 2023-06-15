import gulp, { dest, parallel, src } from "gulp";
import rename from "gulp-rename";
import del from "del";
import glob from "glob";
import path from "path";
import { writeFile } from "fs/promises";
import { transformStreamFn } from "../plugins/through2";
import camelCaseFn from "../plugins/camelcase";
import {
  isSvgStartTag,
  isComment,
  replaceFillAttr,
  replaceSize,
  isPathStartTag,
  isTitle,
  formatCode,
  formatBasename,
} from "../utils";

function generateCodefn() {
  return transformStreamFn((bufferString: string, basename: string) => {
    const lines = bufferString.split("\n");
    const componentName = camelCaseFn(formatBasename(basename), {
      pascalCase: true,
    });
    let newStr = "";
    lines.forEach((line, index) => {
      if (isSvgStartTag(line)) {
        newStr += replaceSize(line, "vue") + `\n`;
      } else if (isPathStartTag(line)) {
        newStr += replaceFillAttr(line, "vue") + "\n";
      } else if (isComment(line) || isTitle(line)) {
        return;
      } else {
        newStr += line + `\n`;
      }
    });
    try {
      const vue = formatCode(
        `<template>
                    <icon-wrapper :spin="spin" :rotate="rotate">
                    ${newStr}
                    </icon-wrapper>
                    
                </template>
                <script lang='ts'>
                    import {defineComponent} from 'vue'
                    import iconWrapper from '../components/base.vue'
                    export default defineComponent({
                        name:"${componentName}",
                        components:{iconWrapper},
                        props: {
                            size:{
                                type:String || Number,
                                default:'1em'
                            },
                            fill:{
                                type:String,
                                default:'currentColor'
                            },
                            rotate:Number,
                            spin:Boolean,
                        }
                    })
                </script>
                `,
        "vue"
      );
      console.log(vue);
      return vue;
    } catch (err) {
      console.log(err);
    }
  });
}
export const generateVueIconEntry = () => {
  return glob("packages/vue/src/icons/*.vue", (err, files) => {
    const code = files
      .map((file) => {
        const componentName = path.basename(file).replace(".vue", "");
        return `export {default as ${componentName}} from './icons/${componentName}.vue'`;
      })
      .join("\n");
    console.log(code);

    writeFile("packages/vue/src/index.ts", code, "utf-8");
  });
};
export const generateVueIcon = () => {
  gulp.task("clean", () => {
    return del(["packages/vue/src/icons/*"]);
  });
  gulp.task("generate", () => {
    return src("source/*.svg")
      .pipe(generateCodefn())
      .pipe(
        rename((file) => {
          file.basename = camelCaseFn(formatBasename(file.basename), {
            pascalCase: true,
          });
          file.extname = ".vue";
        })
      )
      .pipe(dest("packages/vue/src/icons"));
  });

  return gulp.series("clean", "generate");
};
