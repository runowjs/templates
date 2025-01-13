import { useAuth } from '@/proviers/auth';
import { title } from '@/utils/document';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import { UserIcon } from 'lucide-react';
import React from 'react';

export function meta() {
  return [{ title: title('Profile') }];
}

const Index: React.FC = () => {
  const [form] = Form.useForm();
  const { identity } = useAuth();
  return (
    <Card>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          ...identity,
          language: 'en',
          dateFormat: 'DD/MM/YYYY',
        }}
      >
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
                Your Photo
              </Typography.Title>
              <Typography.Paragraph type="secondary">
                This will display on your profile.
              </Typography.Paragraph>
            </Col>
            <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
              <Flex align="center">
                <Form.Item dependencies={['avatar']} noStyle>
                  {({ getFieldValue }) => (
                    <Avatar
                      size={64}
                      src={getFieldValue('avatar')}
                      icon={<UserIcon size={32} />}
                    />
                  )}
                </Form.Item>
                <Button type="link">Update</Button>
                <Button type="link" danger>
                  Delete
                </Button>
              </Flex>
            </Col>
          </Row>
          <div>
            <Row gutter={32}>
              <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Username
                </Typography.Title>
              </Col>
              <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
                <Form.Item name="username">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  Email
                </Typography.Title>
              </Col>
              <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
                <Form.Item name="email">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Row gutter={32}>
            <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                Linked team account
              </Typography.Title>
              <Typography.Paragraph type="secondary">
                Easily switch between them and access both accounts from any
                device.
              </Typography.Paragraph>
            </Col>
            <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
              <List
                dataSource={[
                  {
                    name: 'Runow Team',
                    icon: 'https://i.pravatar.cc/128',
                  },
                  {
                    name: 'Other Team',
                    icon: 'https://i.pravatar.cc/128',
                  },
                ]}
                renderItem={(record, index) => (
                  <List.Item
                    key={index}
                    actions={[
                      <Button key="manage" size="small">
                        Manage team
                      </Button>,
                    ]}
                  >
                    <Flex align="center" gap={16}>
                      <Avatar src={record.icon} />
                      <Typography.Text strong>{record.name}</Typography.Text>
                    </Flex>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Row gutter={32}>
            <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                Language
              </Typography.Title>
            </Col>
            <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
              <Form.Item name="language">
                <Select
                  style={{ width: 220 }}
                  options={[{ value: 'en', label: 'English' }]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col xs={24} md={10} lg={8} xl={8} xxl={6}>
              <Typography.Title level={5} style={{ margin: 0 }}>
                Date format
              </Typography.Title>
            </Col>
            <Col xs={24} md={14} lg={16} xl={14} xxl={12}>
              <Form.Item name="dateFormat">
                <Select
                  style={{ width: 220 }}
                  options={[{ value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' }]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary">Update</Button>
        </Space>
      </Form>
    </Card>
  );
};

export default Index;
