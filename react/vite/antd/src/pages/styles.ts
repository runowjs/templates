import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => {
  return {
    root: css`
      min-height: 100vh;
      background-color: ${token.colorBgContainer};
    `,
  };
});

export default useStyles;
