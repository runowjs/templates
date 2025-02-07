import { type GetProp, Menu, type MenuProps } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { BoltIcon, HomeIcon, TriangleAlertIcon, UsersIcon } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    menu: css`
      &.${prefixCls}-menu-light.${prefixCls}-menu-root {
        &.${prefixCls}-menu-inline,&.${prefixCls}-menu-vertical {
          border-inline-end: 0; // remove right border
          max-height: 100%;
          overflow: auto;
          padding: 0;

          // custom scrollbar (recommend)
          &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          &::-webkit-scrollbar-thumb {
            background: ${token.colorFill};
            border-radius: 4px;
          }
        }
      }

      // hide group title (recommend)
      &.${prefixCls}-menu-inline-collapsed {
        .${prefixCls}-menu-item-group-title {
          display: none;
        }
      }

      // shrink arrow (¬‿¬)
      .${prefixCls}-menu-submenu-arrow {
        &:before,
        &:after {
          height: 1px;
          border-radius: 0;
        }
      }
    `,
  };
});

type MenuItemType = GetProp<MenuProps, 'items'>[number] & {
  path: string;
};

const menus: MenuItemType[] = [
  // use dynamic icons [not recommended]
  // {
  //   key: 'home',
  //   label: 'Home',
  //   icon: <DynamicIcon name="home" size={16} />,
  //   path: '/',
  // },
  {
    key: 'home',
    label: 'Home',
    icon: <HomeIcon size={16} />,
    path: '/',
  },
  {
    key: 'users',
    label: 'Users',
    icon: <UsersIcon size={16} />,
    path: '/users',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <BoltIcon size={16} />,
    path: '/settings',
  },
  {
    key: 'not-found',
    label: '404',
    icon: <TriangleAlertIcon size={16} />,
    path: '/xxx',
  },
];

const Sidebar: React.FC = () => {
  const { styles, prefixCls } = useStyles();

  return (
    <>
      <Menu
        className={styles.menu}
        theme="light"
        mode="inline"
        items={menus}
        selectable={false}
        _internalRenderMenuItem={(dom, props) => {
          const { elementRef, className, ...reset } = dom.props;
          return (
            <NavLink
              to={props.path}
              ref={elementRef}
              viewTransition
              className={({ isActive }) =>
                classNames(className, {
                  [`${prefixCls}-menu-item-selected`]: isActive,
                })
              }
              {...reset}
            />
          );
        }}
      />
    </>
  );
};

export default Sidebar;
