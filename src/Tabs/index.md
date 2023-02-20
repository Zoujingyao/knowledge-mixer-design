---
title: Tabs 标签页
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /components/data-display
---

# Tabs 标签页
选项卡切换组件。提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 代码演示

### 基本
```tsx
/**
 * description: 默认选中第一项。
 */
import React from 'react';
import { Tabs } from 'knowledge-mixer-design';

export default () => {
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
      <Tabs
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
  );
};
```

### 禁用
```tsx
/**
 * description: 禁用某一项。
 */
import React from 'react';
import { Tabs } from 'knowledge-mixer-design';

export default () => {
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Tab 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Tab 2',
      disabled: true,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Tab 3',
    },
  ];

  return <Tabs items={items} />;
};
```

### 居中
```tsx
/**
 * description: 标签居中展示。
 */
import React from 'react';
import { Tabs } from 'knowledge-mixer-design';

export default () => {
  return (
    <Tabs
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
      centered={true}
    />
  );
};
```

### 附加内容
```tsx
/**
 * description: 可以在页签后添加附加操作。
 */
import React from 'react';
import { Tabs, Button } from 'knowledge-mixer-design';

export default () => {
  return (
    <Tabs
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
      tabBarExtraContent={<Button>Extra Action</Button>}
    />
  );
};
```

### 自定义样式
<code src='./demo/index.tsx'></code>

<API src="./index.tsx" ></API>
