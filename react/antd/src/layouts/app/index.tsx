import Footer from '@/layouts/app/components/footer';
import Header from '@/layouts/app/components/header';
import Sidebar from '@/layouts/app/components/sidebar';
import AuthProvider from '@/proviers/auth';
import { Layout } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { Outlet } from 'react-router';

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
        box-shadow: 1px 0 0 ${token.colorBorderSecondary};
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
    `,
    content: css`
      padding: ${token.paddingLG}px;
    `,
    footer: css``,
  };
});

const AppLayout: React.FC = () => {
  const { styles } = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AuthProvider>
      <Layout className={styles.root} hasSider>
        <Layout.Sider
          collapsed={collapsed}
          collapsedWidth={64}
          collapsible
          breakpoint="lg"
          className={styles.ghost}
        />
        <Layout.Sider
          collapsed={collapsed}
          collapsedWidth={64}
          className={styles.sidebar}
          theme="light"
          collapsible
          breakpoint="lg"
          onCollapse={setCollapsed}
        >
          <Sidebar />
        </Layout.Sider>
        <Layout className={styles.wrapper}>
          <Layout.Header className={styles.ghost} />
          <Layout.Header className={styles.header}>
            <Header />
          </Layout.Header>
          <Layout.Content className={styles.content}>
            <Outlet />
          </Layout.Content>
          <Layout.Footer className={styles.footer}>
            <Footer />
          </Layout.Footer>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default AppLayout;
