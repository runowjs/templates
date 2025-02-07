import { authService } from '@/pages/auth/services';
import { title } from '@/utils/document';
import { useRequest } from 'ahooks';
import {
  Alert,
  App,
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Typography,
} from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export function meta() {
  return [{ title: title('Sign up') }];
}

export default function Index() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();
  const { message } = App.useApp();
  const isAgreed = Form.useWatch('agreement', form);

  const { loading: submitting, run: doSubmit } = useRequest(
    authService.register,
    {
      manual: true,
      onSuccess: (data) => {
        message.success('Register Success');
        setErrMsg(undefined);
        navigate('/', { replace: true });
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
      <Typography.Title level={2}>
        Welcome to {import.meta.env.VITE_APP_NAME}
      </Typography.Title>
      <Typography.Paragraph type="secondary">
        Have an account? <Link to="/login">Login Here →</Link>
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
          <Input placeholder="Username" />
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
        <Form.Item
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error('Please agree to the Terms of Use'),
                    ),
            },
          ]}
          name="agreement"
          valuePropName="checked"
          initialValue={true}
        >
          <Checkbox>
            By registering you agree to the<a> Terms of Use </a>.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            disabled={!isAgreed}
            block
            type="primary"
            htmlType="submit"
            loading={submitting}
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
