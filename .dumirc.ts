import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'polona-doc',
  },
  verifyCommit: {
    allowEmoji: true,
  },
  base: '/polona-doc/',
  publicPath: '/polona-doc/',
});
