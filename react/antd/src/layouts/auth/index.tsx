import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout.Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default AuthLayout;
