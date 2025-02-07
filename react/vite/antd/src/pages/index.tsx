import PageContainer from '@/components/page-container';
import { useAuth } from '@/proviers/auth';
import { title } from '@/utils/document';
import { Card, Col, Row } from 'antd';

export function meta() {
  return [{ title: title('Home') }];
}

export default function Index() {
  const { identity } = useAuth();
  return (
    <PageContainer title={`Welcome back, ${identity?.nickname}`}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ height: 200 }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ height: 200 }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ height: 200 }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Card style={{ height: 200 }} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Card style={{ height: 400 }} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card style={{ height: 400 }} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card style={{ height: 400 }} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card style={{ height: 400 }} />
        </Col>
      </Row>
    </PageContainer>
  );
}
