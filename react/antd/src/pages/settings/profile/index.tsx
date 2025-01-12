import { title } from '@/utils/document';
import { Card } from 'antd';
import React from 'react';

export function meta() {
  return [{ title: title('Profile') }];
}

const Index: React.FC = () => {
  return <Card></Card>;
};

export default Index;
