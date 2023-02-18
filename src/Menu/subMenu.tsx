import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import { MenuItemProps } from './menuItem';
import './index.less';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext);
  // 通过context获得一个内部为index的数组defaultOpenSubMenus
  const openSubMenus = context.defaultOpenSubMenus as string[];
  // 只在纵向时生效，检查数组内部的index
  const isOpen = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false;
  // 使用useState控制下拉菜单状态
  const [menuOpen, setOpen] = useState(isOpen);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  });
  // 纵向下拉菜单的点击事件
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  // 让打开关闭更丝滑
  let timer: any;
  // 横向下拉菜单的鼠标事件 toggle控制打开关闭
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  // 从menu的context中获得mode,从而设置纵向/横向时下拉菜单的鼠标事件
  // 纵向时触发点击事件
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  // 横向时触发Mouse事件，下拉菜单展开收起更符合习惯
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  //渲染下拉菜单
  const renderChildren = () => {
    const subMenuClasses = classNames('km-submenu', {
      'menu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component');
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
