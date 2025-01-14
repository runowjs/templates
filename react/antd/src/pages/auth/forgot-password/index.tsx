import { authService } from '@/pages/auth/services';
import { title } from '@/utils/document';
import { useRequest } from 'ahooks';
import {
  Alert,
  App,
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Flex,
  Form,
  type FormProps,
  Input,
  Typography,
} from 'antd';
import { useTheme } from 'antd-style';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function meta() {
  return [{ title: title('Forgot Password') }];
}

const Index: React.FC = () => {
  const [form] = Form.useForm();
  const theme = useTheme();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();
  const { message } = App.useApp();

  const { loading: submitting, run: doSubmit } = useRequest(
    authService.forgotPassword,
    {
      manual: true,
      onSuccess: (data) => {
        message.success('Send Success');
        setErrMsg(undefined);
        navigate('/login', { replace: true });
      },
      onError: (e) => {
        setErrMsg(e.message);
      },
    },
  );

  const onFinish: FormProps['onFinish'] = (values) => {
    // submit
    // doSubmit(values);

    // demo skip
    navigate('/', { replace: true });
  };

  return (
    <Flex
      vertical
      style={{
        width: '100%',
        maxWidth: 400,
      }}
      gap={24}
    >
      <Flex gap={16} align="center" justify="center">
        <Avatar src="./runow.svg" size="large" shape="square" />
        <Typography.Title level={3} style={{ margin: 0 }}>
          Runow Project
        </Typography.Title>
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              bodyPadding: theme.paddingXL,
              borderRadiusLG: 8,
            },
          },
        }}
      >
        <Card bordered={false}>
          <Typography.Title
            level={4}
            style={{
              margin: '0 0 1em',
              textAlign: 'center',
            }}
          >
            Forgot your password?
          </Typography.Title>
          <Form
            disabled={submitting}
            form={form}
            layout="vertical"
            size="large"
            onFinish={onFinish}
          >
            <Form.Item hidden={!errMsg}>
              <Alert type="error" showIcon message={errMsg} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
                {
                  type: 'email',
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label={null}>
              <Button
                block
                type="primary"
                htmlType="submit"
                loading={submitting}
              >
                Send reset instructions
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Typography.Text>
                Have an account? <Link to="/login">Sign in</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </Card>
      </ConfigProvider>
    </Flex>
  );
};

export default Index;
