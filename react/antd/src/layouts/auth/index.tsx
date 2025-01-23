import bannerUrl from '@/assets/images/sso.jpg';
import useStyles from '@/layouts/auth/styles';
import { Avatar, ConfigProvider, Layout, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  const { styles } = useStyles();

  // Avoid flashing banner bars on mobile devices
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
