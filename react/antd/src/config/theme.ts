import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  cssVar: true, // use css variables -> var(--xxx)
  hashed: false, // close hash
  token: {
    //colorPrimary: '#5a59fb',
    //borderRadiusXS: 2,
    //borderRadiusSM: 4,
    //borderRadius: 4,
    //borderRadiusLG: 6,
    colorBgLayout: '#f2f5fa',
  },
  components: {
    Layout: {
      headerHeight: 48,
      headerPadding: '0 8px 0 24px',
      footerPadding: '24px',
    },
  },
};

export default theme;
