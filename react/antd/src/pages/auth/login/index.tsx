import { authService } from '@/pages/auth/services';
import { title } from '@/utils/document';
import { useRequest } from 'ahooks';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Flex,
  Form,
  type FormProps,
  Input,
  Typography,
} from 'antd';
import { useTheme } from 'antd-style';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function meta() {
  return [{ title: title('Sign In') }];
}

export default function Index() {
  const [form] = Form.useForm();
  const theme = useTheme();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();

  const { loading: submitting, run: doSubmit } = useRequest(authService.login, {
    manual: true,
    onSuccess: (data) => {
      // const { token } = data;
      // setToken(token);
      // setErrMsg(undefined);
    },
    onError: (e) => {
      setErrMsg(e.message);
    },
  });

  const onFinish: FormProps['onFinish'] = (values) => {
    // check login and then set token, eg:
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
            Sign in your account
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
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between">
                <Form.Item noStyle name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgot-password">Forgot password?</Link>
              </Flex>
            </Form.Item>
            <Form.Item label={null}>
              <Button
                block
                type="primary"
                htmlType="submit"
                loading={submitting}
              >
                Sign in
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Typography.Text>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </Card>
      </ConfigProvider>
    </Flex>
  );
}
