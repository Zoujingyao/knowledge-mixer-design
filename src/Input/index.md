---
title: Input
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
---

# Input

## 基本样式
```tsx
import React from 'react';
import { Input } from 'knowledge-mixer-design';

export default () => {
  return(<>
    <Input size="small" placeholder="small" />
    <br />
    <br />
    <Input size="middle" placeholder="middle" />
    <br />
    <br />
    <Input size="large" placeholder="large" />
  </>);
};
```


## 不同状态的输入框
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

## 有前置/后置的输入框
```tsx

import React from 'react';
import { Input,Check } from 'knowledge-mixer-design';

export default () =>(
 <>
 <Input prefix={<Check className='icon'/>} size='large' defaultValue="mysite" />
 <br/>
 <br/>
 <Input prefix={<Check className='icon'/>} defaultValue="mysite" />
 <br/>
 <br/>
 <Input prefix={<Check className='icon'/>} size='small' defaultValue="mysite" />
 <br/>
 </>
 )
 
```

## Test

```tsx
import React from 'react'
import { Input } from 'antd';
export default () =>(
 <Input addonBefore="http://" suffix=".com" allowClear defaultValue="mysite" />
 )

```


<API></API>