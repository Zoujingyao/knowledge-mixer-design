---
title: Input  输入框
nav:
  title: Components 
  path: /components 
group:
  title: 数据录入
  path: /components/data-input
---

# Input 输入框

## 代码演示

### 基本
```tsx
/**
 * description: 支持三种尺寸。
 */
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

### 状态
```tsx
/**
 * description: 不同状态的输入框。
 */
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

### 前置/后置标签
```tsx
/**
 * description: 有前置/后置的输入框。
 */
import React from 'react';
import { Input,Check } from 'knowledge-mixer-design';

export default () =>{
// const [value,setValue] = React.useState('13123');
// const onChange = (value:any)=>{
// setValue(value);
// console.log(value);
// }
return (
 <>
 <Input prefix={<Check className='icon'/>} size='large' defaultValue="mysite" />
 <br/>
 <br/>
 <Input prefix={<Check className='icon'/>} defaultValue="mysite" />
 <br/>
 <br/>
 <Input prefix={<Check className='icon'/>} size='small' defaultValue="mysite" />
 <br/>
 <br/>
 <Input prefix={<Check className='icon'/>}  allowClear suffix={'.com'} />
 <br/>
  <br/>
   <Input prefix={<Check className='icon'/>}  status='warning' allowClear suffix={'.com'} />
 </>
 )}
 
```

<API src="./index.tsx" ></API>
