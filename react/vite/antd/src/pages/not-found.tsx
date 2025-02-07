import { title } from '@/utils/document';
import { Button, Flex, Result } from 'antd';
import React from 'react';

export function meta() {
  return [{ title: title('Page Not Found') }];
}

const NotFound: React.FC = () => {
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        minHeight: '100vh',
      }}
    >
      <Result
        status={404}
        title="404"
        subTitle="Page Not Found"
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </Flex>
  );
};

export default NotFound;
