import { Avatar, Button, Dropdown, Flex, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import {
  BellIcon,
  ChevronDownIcon,
  LanguagesIcon,
  LogOutIcon,
  ShieldIcon,
  UserIcon,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <>
      <ThemeProvider themeMode="dark">
        <Typography.Title level={5} style={{ margin: 0 }}>
          LOGO
        </Typography.Title>
      </ThemeProvider>
      <Flex align="center" gap={8}>
        <ThemeProvider themeMode="dark">
          <Button type="text" icon={<BellIcon size={18} />} />
          <Button type="text" icon={<LanguagesIcon size={18} />} />
        </ThemeProvider>
        <Dropdown
          menu={{
            items: [
              {
                key: '/settings/profile',
                label: 'Profile',
                icon: <UserIcon size={16} />,
              },
              {
                key: '/settings/security',
                label: 'Security',
                icon: <ShieldIcon size={16} />,
              },
              {
                type: 'divider',
              },
              {
                key: '/login',
                label: 'Logout',
                icon: <LogOutIcon size={16} />,
                danger: true,
              },
            ],
            _internalRenderMenuItem: (dom, props) => {
              const { elementRef, ...reset } = dom.props;
              return (
                <Link
                  to={props.eventKey}
                  ref={elementRef}
                  viewTransition
                  {...reset}
                />
              );
            },
          }}
        >
          <div>
            <ThemeProvider themeMode="dark">
              <Button
                type="text"
                icon={<ChevronDownIcon size={14} />}
                iconPosition="end"
                style={{
                  height: 48,
                  border: 0,
                }}
              >
                <Flex align="center" gap={8}>
                  <Avatar
                    style={{
                      background: '#fff',
                    }}
                    size="small"
                    shape="square"
                    src="./runow.svg"
                  />
                  <Typography.Text>Runow</Typography.Text>
                </Flex>
              </Button>
            </ThemeProvider>
          </div>
        </Dropdown>
      </Flex>
    </>
  );
};

export default Header;
