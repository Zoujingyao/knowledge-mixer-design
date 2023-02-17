import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'KM Design',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@/src': resolve(__dirname, './src'),
    '@/utils': resolve(__dirname, './utils'),
  },
  cssLoader: {
    // 驼峰形式命名
    localsConvention: 'camelCase',
  },
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "~@/assets/css/index.less";',
    },
  },
  // more config: https://d.umijs.org/config
});
