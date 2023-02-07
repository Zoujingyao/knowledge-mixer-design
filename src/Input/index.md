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

基本样式:
```tsx
import React from 'react';
import { Input } from 'knowledge-mixer-design';

export default () => <Input />;
```


不同状态:
```tsx
import React from 'react';
import { Input } from 'knowledge-mixer-design';

export default () => {
return (
<>
<div>
     <Input status='error' />
     <br/>
     <br/>
     <Input status='warning' />
</div>
</>
)
};
```