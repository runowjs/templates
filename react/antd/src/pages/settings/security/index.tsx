import { title } from '@/utils/document';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  List,
  Progress,
  Row,
  Space,
  Switch,
  Table,
  Typography,
} from 'antd';
import { useTheme } from 'antd-style';
import { BadgeCheckIcon, CompassIcon, Trash2Icon } from 'lucide-react';
import React from 'react';

export function meta() {
  return [{ title: title('Security') }];
}

const Index: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex vertical gap={16}>
      <ConfigProvider
        theme={{
          components: {
            Alert: {
              withDescriptionPadding: '12px 16px',
              marginXS: 0,
            },
          },
        }}
      >
        <Alert
          style={{
            alignItems: 'center',
          }}
          showIcon
          icon={
            <Progress
              type="circle"
              percent={90}
              size={48}
              showInfo={false}
              strokeWidth={16}
            />
          }
          message={
            <Typography.Text strong>
              Your account security is 90%
            </Typography.Text>
          }
          description={
            <Typography.Text type="secondary">
              Please review your account security settings regularly and update
              your password.
            </Typography.Text>
          }
          action={
            <Flex gap={16}>
              <Button color="default" variant="dashed">
                Dismiss
              </Button>
              <Button type="primary">Review security</Button>
            </Flex>
          }
        />
      </ConfigProvider>
      <Card>
        <Form layout="vertical">
          <Space
            direction="vertical"
            style={{
              display: 'flex',
            }}
            split={<Divider type="horizontal" />}
          >
            <Row gutter={32}>
              <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Password
                </Typography.Title>
                <Typography.Paragraph type="secondary">
                  Set a password to protect your account.
                </Typography.Paragraph>
              </Col>
              <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
                <List>
                  <List.Item actions={[<Button key="edit">Edit</Button>]}>
                    <List.Item.Meta
                      title="******"
                      description={
                        <Typography.Text type="success">
                          <Flex align="center" gap={8}>
                            <BadgeCheckIcon size={14} />
                            <span>Very Secure</span>
                          </Flex>
                        </Typography.Text>
                      }
                    />
                  </List.Item>
                </List>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Two-step verification
                </Typography.Title>
                <Typography.Paragraph type="secondary">
                  We recommend requiring a verification code in addition to your
                  password.
                </Typography.Paragraph>
              </Col>
              <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
                <List>
                  <List.Item actions={[<Button key="edit">Edit</Button>]}>
                    <Flex gap={8} align="center">
                      <Switch defaultChecked />
                      <span>Two-step verification</span>
                    </Flex>
                  </List.Item>
                </List>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Browsers and devices
                </Typography.Title>
                <Typography.Paragraph type="secondary">
                  These browsers and devices are currently signed in to your
                  account. Remove any unauthorized devices.
                </Typography.Paragraph>
              </Col>
              <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
                <Table
                  rowKey="id"
                  showHeader={false}
                  size="small"
                  pagination={false}
                  dataSource={[
                    {
                      id: 1,
                      title: 'Safari on Mac OS X',
                      location: 'Mexico City, Mexico',
                      session: 'Current session',
                    },
                    {
                      id: 2,
                      title: 'Chrome on Windows',
                      location: 'Mexico City, Mexico',
                      session: 'Current session',
                    },
                    {
                      id: 3,
                      title: 'Safari on Mac OS X',
                      location: 'Mexico City, Mexico',
                      session: 'Current session',
                    },
                    {
                      id: 4,
                      title: 'Chrome on Windows',
                      location: 'Mexico City, Mexico',
                      session: 'Current session',
                    },
                  ]}
                  columns={[
                    {
                      width: 60,
                      render: () => {
                        return (
                          <Avatar
                            style={{
                              background: theme.colorPrimary,
                            }}
                            shape="square"
                            icon={<CompassIcon size={18} />}
                          />
                        );
                      },
                    },
                    {
                      dataIndex: 'title',
                    },
                    {
                      dataIndex: 'location',
                    },
                    {
                      dataIndex: 'session',
                    },
                    {
                      width: 40,
                      render: () => {
                        return (
                          <Button
                            key="delete"
                            icon={<Trash2Icon size={16} />}
                          />
                        );
                      },
                    },
                  ]}
                />
              </Col>
            </Row>
          </Space>
        </Form>
      </Card>
    </Flex>
  );
};

export default Index;
