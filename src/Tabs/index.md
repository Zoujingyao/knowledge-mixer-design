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
```tsx
/**
 * title: 基本
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

```tsx
/**
 * title: 禁用
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

```tsx
/**
 * title: 居中
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

```tsx
/**
 * title: 附加内容
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

<code src='./demo/index.tsx'></code>

<API src="./index.tsx" ></API>
