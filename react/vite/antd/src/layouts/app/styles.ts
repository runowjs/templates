import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    ghost: css`
      visibility: hidden;
    `,
    root: css`
      min-height: 100vh;
    `,
    sidebar: css`
      &.${prefixCls}-layout-sider {
        position: fixed;
        left: 0;
        top: 48px; // header height
        bottom: 0;
        z-index: ${token.zIndexPopupBase};
        // box-shadow: 1px 0 0 ${token.colorBorderSecondary};
      }
    `,
    wrapper: css``,
    header: css`
      // padding: 0;
      // background-color: ${token.colorBgContainer};
      z-index: ${token.zIndexPopupBase};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      line-height: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px 0 24px;
    `,
    content: css`
      padding: ${token.paddingXL}px;
    `,
    footer: css`
      padding: ${token.padding}px ${token.paddingXL}px;
    `,
  };
});

export default useStyles;
