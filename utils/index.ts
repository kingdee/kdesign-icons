import { format } from "prettier";
import camelCaseFn from "../plugins/camelcase";

export const formatCode = (code: string, type: string) => {
  return format(code, {
    parser: type,
    semi: true,
    singleQuote: true,
  });
};
export const formatBasename = (str: string) => {
  const formatName = str
    .replace(/_/g, "-")
    .replace(/["'()]/g, "")
    .replace(/\&/g, "")
    .replace(/\d/g, function (match) {
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
  return formatName;
};
export const isSvgStartTag = (str: string) => {
  const regex = /<svg/;
  return regex.test(str);
};
export const isGStartTag = (str: string) => {
  const regex = /<g/;
  return regex.test(str);
};
export const isPathStartTag = (str: string) => {
  const regex = /<path/;
  return regex.test(str);
};
export const isComment = (str: string) => {
  const regex = /<!--/;
  return regex.test(str);
};
export const isTitle = (str: string) => {
  const regex = /<title/;
  return regex.test(str);
};
export const isUse = (str: string) => {
  const regex = /<use/;
  return regex.test(str);
};
export function convertXlinkHref(str: string) {
  // 创建正则表达式匹配 xlink:href 属性
  const regex = /xlink:href/gi;

  // 使用 replace 方法替换匹配到的内容
  const result = str.replace(regex, "xlinkHref");

  return result;
}
export const removeXmlsAttributes = (str: string) => {
  const regex = /xmlns:xlink="[^"]*"(\s|)/g;
  const result = str.replace(regex, "");
  return result;
};
export const removeStyleAttributes = (str: string) => {
  const regex_1 = /style="[^"]*"(\s|)/g;
  const regex_2 = /class="[^"]*"(\s|)/g;
  const result = str.replace(regex_1, "").replace(regex_2, "");
  return result;
};
export const formatJsxAttributes = (str: string) => {
  const regex = /[\w-]+(?==)/g;
  const newStr = str.replace(regex, (match) => camelCaseFn(match));
  return newStr;
};
export const replaceFillAttr = (str: string, type: string) => {
  const regex = /fill="#([a-fA-F0-9]{6})"/g;
  if (type === "vue") {
    return str.replace(regex, ':fill="fill"');
  }
  return str.replace(regex, "fill={fill}");
};
export const replaceSize = (str: string, type: string) => {
  const regExp = /(width|height)="(\d+)px"/g;
  if (type === "vue") {
    return str.replace(regExp, ':$1="size"');
  }
  return str.replace(regExp, "$1={size}");
};
