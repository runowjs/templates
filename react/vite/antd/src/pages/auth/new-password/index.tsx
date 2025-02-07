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
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function meta() {
  return [{ title: title('New Password') }];
}

export default function Index() {
  const [form] = Form.useForm();
  const theme = useTheme();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();
  const { message } = App.useApp();

  const { loading: submitting, run: doSubmit } = useRequest(
    authService.resetPassword,
    {
      manual: true,
      onSuccess: (data) => {
        message.success('Reset Success');
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
      <Typography.Title level={2}>Set New Password</Typography.Title>

      {errMsg && (
        <Alert
          message={errMsg}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <Form
        disabled={submitting}
        form={form}
        layout="vertical"
        variant="filled"
        size="large"
        initialValues={{
          agree: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item hidden={!errMsg}>
          <Alert type="error" showIcon message={errMsg} />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name="crmPassword"
          label="Confirm New Password"
          dependencies={['newPassword']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm New Password" />
        </Form.Item>
        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
