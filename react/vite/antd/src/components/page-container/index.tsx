import { ConfigProvider, Flex, Menu, type MenuProps, Typography } from 'antd';
import { useTheme } from 'antd-style';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router';

export type PageContainerProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  menus?: MenuProps['items'];
}>;

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  menus,
  children,
}) => {
  const { prefixCls } = useTheme();

  return (
    <Flex vertical gap={16}>
      {title && (
        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
      )}
      {menus && menus.length > 0 && (
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBg: 'transparent',
                itemPaddingInline: '0 32px',
              },
            },
          }}
        >
          <Menu
            mode="horizontal"
            selectable={false}
            items={menus}
            _internalRenderMenuItem={(dom, props) => {
              const { elementRef, className, ...reset } = dom.props;
              return (
                <NavLink
                  to={props.eventKey}
                  ref={elementRef}
                  className={({ isActive }) =>
                    classNames(className, {
                      [`${prefixCls}-menu-item-selected`]: isActive,
                    })
                  }
                  viewTransition
                  {...reset}
                />
              );
            }}
          />
        </ConfigProvider>
      )}
      {children}
    </Flex>
  );
};

export default PageContainer;
