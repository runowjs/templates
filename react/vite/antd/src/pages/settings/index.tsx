import PageContainer from '@/components/page-container';
import { title } from '@/utils/document';
import React from 'react';
import { Navigate, Outlet, useMatch } from 'react-router';

export function meta() {
  return [{ title: title('Settings') }];
}

const Index: React.FC = () => {
  const isIndex = useMatch('/settings');

  if (isIndex) {
    return <Navigate to="profile" replace />;
  }
  return (
    <PageContainer
      title="Settings"
      menus={[
        {
          key: '/settings/profile',
          label: 'Profile',
        },
        {
          key: '/settings/security',
          label: 'Security',
        },
      ]}
    >
      <Outlet />
    </PageContainer>
  );
};

export default Index;
