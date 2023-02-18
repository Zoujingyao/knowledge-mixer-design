---
title: Menu 菜单
nav:
  title: Components 
  path: /components 
group:
  title: 数据录入
  path: /components/data-input
---

## 何时使用
导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。这里提供顶部导航和侧边导航，为了更符合使用习惯，顶部导航栏下拉菜单不需要点击就可以展开。

## menu-horizontal:
```jsx
import React from 'react';
import { Menu } from 'knowledge-mixer-design';
const test = () => {
  return (
    <div>
      <Menu defaultIndex={'0'}  onSelect={(index) => {alert(index)}}>
        <Menu.Item>
          我是默认选中的Menu1
        </Menu.Item>
        <Menu.Item disabled>
          我是被禁用的Menu2
        </Menu.Item>
        <Menu.SubMenu title='SubMenu3'>
          <Menu.Item>
            Menu3-1
          </Menu.Item>
          <Menu.Item>
            Menu3-2
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>
          Menu4
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default test;

```
## menu-vertiacl:
```jsx
import React from 'react';
import { Menu } from 'knowledge-mixer-design';
const test = () => {
  return (
    <div>
      <Menu defaultIndex={'0'} mode = 'vertical' defaultOpenSubMenus = {'3'}onSelect={(index) => {alert(index)}}>
        <Menu.Item>
          我是默认选中的Menu1
        </Menu.Item>
        <Menu.Item disabled>
          我是被禁用的Menu2
        </Menu.Item>
        <Menu.SubMenu title='我是需要手动展开的SubMenu3'>
          <Menu.Item>
            Menu3-1
          </Menu.Item>
          <Menu.Item>
            Menu3-2
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title='我是默认展开的SubMenu4'>
          <Menu.Item>
            Menu4-1
          </Menu.Item>
          <Menu.Item>
            Menu4-2
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>
          Menu5
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default test;

```
## API

### Menu
 参数     | 说明                     | 类型      | 默认值 | 版本 |
| -------- | ------------------------ | --------- | ------ | ---- |
| defaultIndex    |初始选中的菜单项 key 数组   | string\[]   | -       |      |
| mode | 菜单类型 ，现在支持垂直和水平两种  | `vertical` \|`horizontal` \|      |`horizontal`
|defaultOpenSubMenus | 初始展开的 SubMenu 菜单项 key 数组 | string\[] | - |   |
 onSelect | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |  |

### MenuItem
 参数     | 说明                     | 类型      | 默认值 | 版本 |
| -------- | ------------------------ | --------- | ------ | ---- |
| title    |设置收缩时展示的悬浮标题   | string   | -       |      |
| disabled | 是否禁用                 | boolean   | false   |      |

