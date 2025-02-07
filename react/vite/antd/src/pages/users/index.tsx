import PageContainer from '@/components/page-container';
import { userServices } from '@/pages/users/services';
import type { UserRecord } from '@/pages/users/types';
import { title } from '@/utils/document';
import { useAntdTable, useBoolean } from 'ahooks';
import {
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  type TableProps,
} from 'antd';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DownloadIcon,
  FoldersIcon,
  TrashIcon,
} from 'lucide-react';
import React, { useState } from 'react';

export function meta() {
  return [{ title: title('Users') }];
}

const Index: React.FC = () => {
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(true);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const [form] = Form.useForm();

  const { tableProps, pagination, search } = useAntdTable(
    async (query, params) => {
      return await userServices
        .getUsers({
          ...query,
          ...params,
        })
        .then((res) => ({
          list: res.data,
          total: res.total,
        }));
    },
    {
      form,
    },
  );

  const { submit, reset } = search;

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableProps['rowSelection'] = {
    columnWidth: 64,
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps<UserRecord>['columns'] = [
    {
      title: 'Avatar',
      key: 'avatar',
      dataIndex: 'avatar',
      width: 90,
      render: (value) => {
        return <Avatar src={value} />;
      },
    },
    {
      title: 'Name',
      key: 'nickname',
      dataIndex: 'nickname',
    },
    {
      title: 'Username',
      key: 'username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      width: 90,
      align: 'center',
      render: () => {
        return <Button type="link">Edit</Button>;
      },
    },
  ];
  return (
    <PageContainer title="Users">
      <Flex vertical gap={16}>
        <Card
          styles={{
            body: {
              paddingBlock: '32px 8px',
            },
          }}
        >
          <Form
            form={form}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 19,
            }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                <Form.Item label="Name">
                  <Input placeholder="Please enter" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                <Form.Item label="Username">
                  <Input placeholder="Please enter" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                <Form.Item label="Email">
                  <Input placeholder="Please enter" />
                </Form.Item>
              </Col>
              {!collapsed && (
                <>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                    <Form.Item label="Phone">
                      <Input placeholder="Please enter" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                    <Form.Item label="Address">
                      <Input placeholder="Please enter" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
                    <Form.Item label="Country">
                      <Select placeholder="Please select" />
                    </Form.Item>
                  </Col>
                </>
              )}
              <Col flex="auto">
                <Form.Item
                  wrapperCol={{
                    style: {
                      textAlign: 'right',
                    },
                  }}
                >
                  <Space>
                    <Button
                      type="link"
                      iconPosition="end"
                      icon={
                        collapsed ? (
                          <ChevronDownIcon size={14} />
                        ) : (
                          <ChevronUpIcon size={14} />
                        )
                      }
                      onClick={toggleCollapsed}
                    >
                      {collapsed ? 'Expand' : 'Collapse'}
                    </Button>
                    <Button onClick={reset}>Reset</Button>
                    <Button type="primary" onClick={submit}>
                      Query
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card
          title={`Total ${pagination.total.toLocaleString()} items`}
          styles={{
            header: {
              margin: 0,
            },
            body: {
              padding: 0,
            },
          }}
          extra={
            <Row justify="space-between" align="middle">
              <Space>
                {selectedRowKeys.length > 0 && (
                  <>
                    <Button key="move" icon={<FoldersIcon size={14} />}>
                      Move to
                    </Button>
                    <Button key="delete" icon={<TrashIcon size={14} />} danger>
                      Delete
                    </Button>
                  </>
                )}
                <Button title="export" icon={<DownloadIcon size={14} />}>
                  Export
                </Button>
              </Space>
            </Row>
          }
        >
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  footerBg: 'transparent',
                },
              },
            }}
          >
            <Table
              rowKey="id"
              columns={columns}
              rowSelection={rowSelection}
              scroll={{
                x: 1200,
              }}
              {...tableProps}
              pagination={{
                ...pagination,
                hideOnSinglePage: true,
                style: {
                  margin: 0,
                  padding: 16,
                },
              }}
            />
          </ConfigProvider>
        </Card>
      </Flex>
    </PageContainer>
  );
};

export default Index;
