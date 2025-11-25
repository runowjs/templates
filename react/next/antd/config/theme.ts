import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const sharedConfig: ThemeConfig = {
  hashed: false, // close hash
};

const lightConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.defaultAlgorithm,
};

const darkConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.darkAlgorithm,
};

export { darkConfig, lightConfig };
