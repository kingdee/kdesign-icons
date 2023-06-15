import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import babel from "rollup-plugin-babel";
import progress from "rollup-plugin-progress";
import terser from '@rollup/plugin-terser'
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    output: [
        {
			file: 'lib/index.js',
			format: 'cjs'
		},
		{
			file: 'es/index.js',
			format: 'es',
		},
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name:"icons-vue",
        },
        {
            file: 'dist/index.umd.min.js',
            format: 'umd',
            name:"icons-vue",
            plugins:[terser()]
        }
    ],
    plugins:[
        typescript(),
        vue(),
        commonjs(),
        babel({
            exclude:"node_modules/**",
            presets:["@babel/preset-env"]
        }),
        progress({
            clearLine:false
        })
    ]
};
