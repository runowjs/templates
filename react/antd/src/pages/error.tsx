import { title } from '@/utils/document';
import { Button, Flex, Result, type ResultProps } from 'antd';
import React from 'react';
import { isRouteErrorResponse } from 'react-router';

export function meta() {
  return [{ title: title('System Error') }];
}

const SystemError: React.FC<{
  error: any;
}> = ({ error }) => {
  const props: Pick<ResultProps, 'status' | 'title' | 'subTitle'> =
    isRouteErrorResponse(error)
      ? {
          status: error.status as ResultProps['status'],
          title: error.statusText,
          subTitle: error.data,
        }
      : error instanceof Error
        ? {
            status: 500,
            title: 'Error',
            subTitle: error.message,
          }
        : {
            status: 500,
            title: 'Oops',
            subTitle: 'Unknown Error',
          };

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
        {...props}
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </Flex>
  );
};

export default SystemError;
