import babel from "@rollup/plugin-babel";

const input = './js/index.js';
const external = ['super-x'];

export default [
    {
        input,
        external,
        plugins: [
            babel({
                babelHelpers: 'bundled',
                presets: [
                    ['@babel/preset-env', {
                        loose: true,
                    }],
                ],
            }),
        ],
        output: {
            globals: {
                'super-x': 'X',
            },
            format: 'umd',
            name: 'CI',
            file: './dist/canvasom-inspector.umd.js',
        },
    },
    {
        input,
        external,
        output: {
            format: 'esm',
            file: './dist/canvasom-inspector.js',
        },
    },
];
