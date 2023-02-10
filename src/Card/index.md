---
title: Card
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
---

## Card

Demo:

```tsx
import React, { useState } from 'react';
import Card from '../Card';
import { Button } from 'antd';

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