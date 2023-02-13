---
title: Button 按钮
nav:
  title: Components
  path: /components
group:
  title: 通用
  path: /components/common
---

## Button 按钮

Demo:

```tsx
import React from 'react';
import { Button,Spin,Check } from 'knowledge-mixer-design';

export default () => {
  const handleSyncClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('success');
        resolve(true);
      }, 1000);
    });
  };

  const handleClick = () => {
    console.log('success');
  };
  const btnStyle = {
    color: 'blue',
  };
return (
<div>
        <Button onClick={handleSyncClick} loading={true} className='km-btn-lg'>
        异步按钮
      </Button>
      <Button onClick={handleClick}>按钮</Button>
      <Button shape="circle" icon={<Spin className='icon'/>}></Button>
      <Button colorSchemes="success" icon={<Check className='icon'/>}>
        成功
      </Button>
      <Button colorSchemes="error">失败</Button>
      <Button colorSchemes="warning" style={btnStyle}>
        警告+蓝色style
      </Button>

</div>
)
};
```