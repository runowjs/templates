import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const sharedConfig: ThemeConfig = {
  cssVar: true, // use css variables -> var(--xxx)
  hashed: false, // close hash
};

const lightConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.defaultAlgorithm,
  components: {
    Layout: {
      headerHeight: 48,
    },
  },
};

const darkConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      headerHeight: 48,
    },
  },
};

export { darkConfig, lightConfig };
