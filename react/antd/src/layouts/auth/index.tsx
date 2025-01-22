import bannerUrl from '@/assets/images/sso.jpg';
import { Avatar, ConfigProvider, Layout, Typography } from 'antd';
import { createStyles, useResponsive } from 'antd-style';
import React from 'react';
import { Outlet } from 'react-router';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      min-height: 100vh;
    `,
    header: css`
      height: auto;
      line-height: 1;
      padding: ${token.paddingLG}px;
    `,
    wrap: css`
      background-color: ${token.colorBgContainer};
    `,
    content: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    footer: css`
      text-align: center;
    `,
    sider: css`
      .${prefixCls}-layout-sider-children > div {
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `,
    container: css`
      max-width: ${token.screenXS}px;
      width: 100%;
      padding: ${token.padding}px;
    `,
  };
});

const AuthLayout: React.FC = () => {
  const { styles } = useStyles();

  // 避免移动设备banner栏闪烁
  const { laptop: showBanner } = useResponsive();
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'transparent',
            footerBg: 'transparent',
          },
        },
      }}
    >
      <Layout className={styles.root} hasSider={showBanner}>
        <Layout className={styles.wrap}>
          <Layout.Header className={styles.header}>
            <Avatar shape="square" src="/runow.svg" />
          </Layout.Header>
          <Layout.Content className={styles.content}>
            <div className={styles.container}>
              <Outlet />
            </div>
          </Layout.Content>
          <Layout.Footer className={styles.footer}>
            <Typography.Text type="secondary">
              © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}
            </Typography.Text>
          </Layout.Footer>
        </Layout>
        <Layout.Sider
          className={styles.sider}
          collapsedWidth={0}
          breakpoint="lg"
          width="33%"
          trigger={null}
        >
          <div
            style={{
              backgroundImage: `url(${bannerUrl})`,
            }}
          />
        </Layout.Sider>
      </Layout>
    </ConfigProvider>
  );
};

export default AuthLayout;
