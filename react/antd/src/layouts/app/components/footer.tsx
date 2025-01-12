import { Flex, Typography } from 'antd';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Typography.Text type="secondary">
        © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}
      </Typography.Text>
      <Typography.Text type="secondary">
        Powered by{' '}
        <a href="https://runow.dev" target="_blank">
          Runow
        </a>
      </Typography.Text>
    </Flex>
  );
};

export default Footer;
