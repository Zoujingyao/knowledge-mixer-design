---
title: Input
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
---

## Input

Demo:

```tsx
import React from 'react';
import { Input } from 'knowledge-mixer-design';

export default () => {
  const onChange = (val: any) => {
    console.log(val);
  };
  const onBlur = (val: any) => {
    console.log(val);
  };
return (
<div>
     <Input  />
</div>
)
};
```