import Footer from '@/layouts/app/components/footer';
import Header from '@/layouts/app/components/header';
import Sidebar from '@/layouts/app/components/sidebar';
import useStyles from '@/layouts/app/styles';
import AuthProvider from '@/proviers/auth';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router';

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
