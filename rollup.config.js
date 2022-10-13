import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import globals from 'rollup-plugin-node-globals';

const rollupConfig = {
  input: 'packages/xblade/src/index.ts',
  output: [
    {
      file: 'lib/xblade.esm.js',
      format: 'esm',
      name: 'blade',
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts'],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    globals(),
  ],
};

export default rollupConfig;
