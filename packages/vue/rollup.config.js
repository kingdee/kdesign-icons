import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import babel from "rollup-plugin-babel";
import terser from '@rollup/plugin-terser'

export default {
    input: "src/index.js",
    output: [
        {
			file: 'dist/index.js',
			format: 'es'
		},
		{
			file: 'dist/index.min.js',
			format: 'es',
			plugins: [terser()]
		}
    ],
    plugins:[
        vue(),
        commonjs(),
        babel({
            exclude:"node_modules/**",
            presets:["@babel/preset-env"]
        })
    ]
};
