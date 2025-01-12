import { type GetProp, Menu, type MenuProps } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { DynamicIcon } from 'lucide-react/dynamic';
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

          // 美化滚动条（推荐）
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

      // 通过样式隐藏分组标题（推荐）
      &.${prefixCls}-menu-inline-collapsed {
        .${prefixCls}-menu-item-group-title {
          display: none;
        }
      }

      // 弱化分组箭头（偏好）
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
  {
    key: 'home',
    label: '首页',
    icon: <DynamicIcon name="home" size={16} />,
    path: '/',
  },
  {
    key: 'users',
    label: '用户',
    icon: <DynamicIcon name="users" size={16} />,
    path: '/users',
  },
  {
    key: 'settings',
    label: '设置',
    icon: <DynamicIcon name="bolt" size={16} />,
    path: '/settings',
  },
  {
    key: 'not-found',
    label: '404',
    icon: <DynamicIcon name="triangle-alert" size={16} />,
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
