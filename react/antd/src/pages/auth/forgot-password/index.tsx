import { authService } from '@/pages/auth/services';
import { title } from '@/utils/document';
import { useRequest } from 'ahooks';
import {
  Alert,
  App,
  Button,
  Form,
  type FormProps,
  Input,
  Typography,
} from 'antd';
import { useTheme } from 'antd-style';
import { ChevronLeftIcon } from 'lucide-react';
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
    <>
      <Link to="/login">
        <ChevronLeftIcon size={16} style={{ verticalAlign: 'middle' }} />
        <span>Go back</span>
      </Link>
      <Typography.Title level={2}>Reset Password</Typography.Title>
      <Typography.Paragraph type="secondary">
        We'll email you instructions on how to reset your password.
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
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email address is required',
            },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Send password reset link
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;
