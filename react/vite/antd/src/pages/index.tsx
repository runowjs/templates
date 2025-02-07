import ThemeSwitcher from '@/components/theme-switcher';
import useStyles from '@/pages/styles';
import { Flex, Typography } from 'antd';

export function meta() {
  return [{ title: 'React + Vite + Ant Design' }];
}

export default function Index() {
  const { styles } = useStyles();
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={32}
      className={styles.root}
    >
      <a href="https://ant-design.antgroup.com/">
        <img
          src="https://cdn.svgporn.com/logos/ant-design.svg"
          height="128"
          alt="antd logo"
        />
      </a>
      <Typography.Title style={{ margin: 0 }} level={2}>
        React + Vite + Ant Design
      </Typography.Title>
      <Typography.Paragraph style={{ margin: 0 }}>
        Powered by{' '}
        <a href="https://runow.dev" target="_blank">
          Runow
        </a>
      </Typography.Paragraph>

      <ThemeSwitcher />
    </Flex>
  );
}
