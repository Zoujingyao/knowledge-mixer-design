---
title: Breadcrumb 面包屑
nav:
  title: Components
  path: /components
group:
  title: 布局
  path: /components/layout
---


# Breadcrumb 面包屑


## 基本用法

```tsx
import React from 'react';
import { Breadcrumb } from 'knowledge-mixer-design';

export default () => {
    const items = [
        { label: 'Home', key: 'item-1' }, // 菜单项务必填写 key
        { label: <a href="">Application Center</a>, key: 'item-2' },
        { label: <a href="">Application List</a>, key: 'item-3' },
        { label: 'An Application', key: 'item-4' },
    ];
  return (
    <>
      <Breadcrumb items={items}/>
    </>
  );
};
```


## 自定义分隔符

```tsx
import React from 'react';
import { Breadcrumb } from 'knowledge-mixer-design';

export default () => {
    const items = [
        { label: 'Home', key: 'item-1' }, // 菜单项务必填写 key
        { label: <a href="">Application Center</a>, key: 'item-2' },
        { label: <a href="">Application List</a>, key: 'item-3' },
        { label: 'An Application', key: 'item-4' },
    ];
  return (
    <>
      <Breadcrumb  separator='->' items={items}/>
    </>
  );
};
```