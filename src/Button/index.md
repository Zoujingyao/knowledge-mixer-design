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
按钮用于开始一个即时操作。

<big>**何时使用**</big>
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 基本用法

```tsx
import React from 'react';
import { Button,Spin,Check } from 'knowledge-mixer-design';

export default () => {
return (
<div>
      <Button>
        按钮
      </Button>
</div>
)
};
```
### 事件绑定
`onClick`点击按钮时的回调绑定响应事件
```tsx
import React from 'react';
import { Button } from 'knowledge-mixer-design';

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
      <Button size='small' onClick={handleClick}>按钮</Button>
</div>
)
};
```
### 异步
添加 `loading` 属性即可让按钮在响应异步时间时处于加载状态
```tsx
import React from 'react';
import { Button} from 'knowledge-mixer-design';

export default () => {
  const handleSyncClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('success');
        resolve(true);
      }, 1000);
    });
  };
return (
<div>
      <Button onClick={handleSyncClick} loading={true} className='km-btn-lg'>
        异步按钮
      </Button>

</div>
)
};
```
### ICON
当需要在 Button 内嵌入 Icon 时，可以设置 `icon` 属性，或者直接在 Button 内使用 Icon 组件
```tsx
import React from 'react';
import { Button,Spin,Check } from 'knowledge-mixer-design';

export default () => {
return (
<div>
      <Button shape="circle" icon={<Spin className='icon'/>}></Button>
      <Button colorSchemes="success" icon={<Check className='icon'/>}>
        成功
      </Button>

</div>
)
};
```
### Button Style
通过设置`colorSchemes`属性确认Button类型,或直接添加`style`属性确认Button样式
```tsx
import React from 'react';
import { Button} from 'knowledge-mixer-design';

export default () => {
  const btnStyle = {
    color: 'blue',
  };
return (
<div>
      <Button colorSchemes="error">失败</Button>
      <Button colorSchemes="warning" style={btnStyle}>
        警告+蓝色style
      </Button>

</div>
)
};
```
## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| htmlType	| 设置 button 原生的 type 值，可选值请参考 HTML 标准	| string	| button |	
| icon	| 设置按钮的图标组件 | ReactNode	| -- |	
| loading	| 设置按钮载入状态	| boolean	| false |	
| size	| 设置按钮大小	| `large middle small`	| middle |	
| type	| 设置按钮类型	| `primary info success warning error` | primary |	
| shape	| 设置按钮形状	| `default circle`	| default |
| colorSchemes | 设置按钮主题 | `primary  info success warning error` | primary |	
| onClick	| 点击按钮时的回调	| (event: MouseEvent) => void	| -- |