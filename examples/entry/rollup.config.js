import dev from 'rollup-plugin-dev';
import babel from '@rollup/plugin-babel';
import openBrowser from 'react-dev-utils/openBrowser';

const rollupConfig = {
  input: './index.js',
  output: { file: './dist/main.js', format: 'esm' },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js'],
      exclude: 'node_modules/**',
    }),
    dev({
      port: 8000,
      spa: true,
      onListen: () => {
        openBrowser('http://localhost:8000');
      },
    }),
  ],
};

export default rollupConfig;
