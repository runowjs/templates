import PageContainer from '@/components/page-container';
import { title } from '@/utils/document';

export function meta() {
  return [{ title: title('Home') }];
}

export default function Index() {
  return <PageContainer title="Home"></PageContainer>;
}
