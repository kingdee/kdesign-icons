import gulp, { dest, src } from "gulp";
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
  removeXmlsAttributes,
  formatJsxAttributes,
} from "../utils";

function generateCodefn() {
  return transformStreamFn((bufferString, basename) => {
    const lines = bufferString.split("\n");
    const componentName = camelCaseFn(formatBasename(basename), {
      pascalCase: true,
    });
    let newStr = "";
    lines.forEach((line, index) => {
      if (isSvgStartTag(line)) {
        newStr += removeXmlsAttributes(replaceSize(line, "react") + `\n`);
      } else if (isPathStartTag(line)) {
        newStr += formatJsxAttributes(replaceFillAttr(line, "react")) + "\n";
      } else if (isComment(line) || isTitle(line)) {
        return;
      } else {
        newStr += formatJsxAttributes(line) + `\n`;
      }
    });
    try {
      const react = formatCode(
        `
                import React from 'react'
                import {IconWrapper,SvgIconProps} from '../components/index'
                
                const ${componentName} = ({size='1em',fill="currentColor",rotate=0,spin=false, ...restProps}:SvgIconProps) => {
                    return (
                        <IconWrapper rotate={rotate} spin={spin} {...restProps}>
                            ${newStr}
                        </IconWrapper>
                    )
                }
                ${componentName}.displayName = '${componentName}';
                export default ${componentName};
                `,
        "babel"
      );
      console.log(react);
      return react;
    } catch (err) {
      console.log(err);
    }
  });
}
export const generateReactIconEntry = () => {
  return glob("packages/react/src/icons/*.tsx", (err, files) => {
    const code = files
      .map((file) => {
        const componentName = path.basename(file).replace(".tsx", "");
        return `export {default as ${componentName}} from './icons/${componentName}'`;
      })
      .join("\n");
    console.log(code);

    writeFile("packages/react/src/map.ts", code, "utf-8");
  });
};
export const generateReactIcon = () => {
  gulp.task("clean", () => {
    return del(["packages/react/src/icons/*"]);
  });
  gulp.task("generate", () => {
    return src("source/*.svg")
      .pipe(generateCodefn())
      .pipe(
        rename((file) => {
          file.basename = camelCaseFn(formatBasename(file.basename), {
            pascalCase: true,
          });
          file.extname = ".tsx";
        })
      )
      .pipe(dest("packages/react/src/icons"));
  });

  return gulp.series("clean", "generate");
};
