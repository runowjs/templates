import PageContainer from '@/components/page-container';
import React from 'react';

export function meta() {
  return [{ title: '用户' }];
}

const Index: React.FC = () => {
  return <PageContainer title="用户"></PageContainer>;
};

export default Index;
