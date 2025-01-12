import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  cssVar: true, // 使用CSS变量
  hashed: false, // 关闭哈希
  token: {
    //colorPrimary: '#5a59fb',
    borderRadiusXS: 2,
    borderRadiusSM: 4,
    borderRadius: 4,
    borderRadiusLG: 6,
    colorBgLayout: '#f2f5fa',
  },
  components: {
    Layout: {
      headerHeight: 48,
      headerPadding: '0 8px 0 24px',
      footerPadding: '16px 24px',
    },
  },
};

export default theme;
