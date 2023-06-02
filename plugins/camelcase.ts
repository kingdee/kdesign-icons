import camelCase,{Options} from "camelcase";
const camelCaseFn = (input: string | string[], options?: Options):string => {
  return camelCase(input, options);
};
export default camelCaseFn
