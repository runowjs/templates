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
            Set New Password
          </Typography.Title>
          <Form
            disabled={submitting}
            form={form}
            layout="vertical"
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
                      new Error(
                        'The new password that you entered do not match!',
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm New Password" />
            </Form.Item>
            <Form.Item label={null}>
              <Button
                block
                type="primary"
                htmlType="submit"
                loading={submitting}
              >
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </ConfigProvider>
    </Flex>
  );
}
