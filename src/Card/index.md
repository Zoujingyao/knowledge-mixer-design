---
title: Card 卡片
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /components/data-display
---

# Card 卡片
基础的卡片容器，可承载文字、列表、图片、段落。

## 代码演示

### 基本
```tsx
/**
 * description: 带标题可悬浮的卡片容器。
 */
import React, { useState } from 'react';
import { Card, Button } from 'knowledge-mixer-design';

export default () => {
  const ref = React.createRef<HTMLDivElement>();
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card ref={ref} title="Hello" hoverable={true}>
        <p>这是一个Card</p>
        <p>{count}</p>
        <Button onClick={() => setCount(count + 1)} >count++</Button>
        <Button onClick={() => setCount(count + 1)} >count++</Button>
      </Card>
    </div>
  );
};
```

<API src="./index.tsx" ></API>
