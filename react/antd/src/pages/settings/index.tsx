import PageContainer from '@/components/page-container';
import React from 'react';
import { Navigate, Outlet, useMatch } from 'react-router';

export function meta() {
  return [{ title: '设置' }];
}

const Index: React.FC = () => {
  const isIndex = useMatch('/settings');

  if (isIndex) {
    return <Navigate to="profile" replace />;
  }
  return (
    <PageContainer
      title="设置"
      menus={[
        {
          key: '/settings/profile',
          label: '个人资料',
        },
        {
          key: '/settings/security',
          label: '安全中心',
        },
      ]}
    >
      <Outlet />
    </PageContainer>
  );
};

export default Index;
