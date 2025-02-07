import { authService } from '@/pages/auth/services';
import { title } from '@/utils/document';
import { useRequest } from 'ahooks';
import {
  Alert,
  Button,
  Checkbox,
  Flex,
  Form,
  type FormProps,
  Input,
  Typography,
} from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function meta() {
  return [{ title: title('Sign In') }];
}

export default function Index() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();

  const { loading: submitting, run: doSubmit } = useRequest(authService.login, {
    manual: true,
    onSuccess: (data) => {
      // const { token } = data;
      // setToken(token);
      setErrMsg(undefined);
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
    <>
      <Typography.Title level={2}>Welcome back</Typography.Title>
      <Typography.Paragraph type="secondary">
        Don't have an account? <Link to="/signup">Signup Now →</Link>
      </Typography.Paragraph>
      {errMsg && (
        <Alert
          message={errMsg}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <Form
        form={form}
        layout="vertical"
        size="large"
        variant="filled"
        requiredMark={false}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input placeholder="Username/Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" noStyle valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgot-password">Forgot password?</Link>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
