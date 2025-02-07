import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

const AppLayout: React.FC = () => {
  return (
    <Layout>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default AppLayout;
