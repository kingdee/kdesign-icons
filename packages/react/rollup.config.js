import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import progress from "rollup-plugin-progress";
import terser from "@rollup/plugin-terser";
export default {
  input: "./src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
    },
    {
      file: "lib/index.esm.js",
      format: "es",
    },
    {
      file:'dist/index.umd.js',
      name:'icons-react',
      format: "umd",
      plugins:[terser()]
    }
  ],
  plugins: [
    typescript({
      module: "ESNext",
      target: "ESNext",
      jsx: "react",
      allowSyntheticDefaultImports: true
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    progress({
      clearLine:false
    })
  ],
  external:['react','react-dom']
};
