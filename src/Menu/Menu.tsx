import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';
import './index.less';

// TS新特性：字符串字面量 对menu纵向/横向进行声明
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  // 高亮索引值
  defaultIndex?: string;
  className?: string;
  // 纵向或横向
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  // 点击后的回调
  onSelect?: SelectCallback;
  // 纵向时下拉菜单默认展开,数组中传入index,index类型为string
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  // 获取到组件的类型
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: '0' });
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props;
  // 声明组件的状态,改变状态的方法
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('km-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  // 点击事件
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  // 传递context
  const passedContext: IMenuContext = {
    // currentActive为number或undefine联合类型
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  // 循环渲染组件的方法
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // 对child进行类型断言以获得displayName
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement?.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 使用cloneElement动态传入 MenuItem上的index
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

Menu.displayName = 'Menu';

export default Menu;
