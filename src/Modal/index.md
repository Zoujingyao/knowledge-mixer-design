---
title: Modal 对话框
nav:
  title: Components
  path: /components
group:
  title: 反馈
  path: /components/react
---

## Modal 对话框
模态对话框

<big>**何时使用**</big>
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作

## 基本用法
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123' 
  open={open} 
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```

### 确认对话框
onCancel/onOk 返回 promise 可以延迟关闭
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123' 
  open={open} 
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```
### 自定义页脚按钮属性
传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123' 
  open={open} 
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```
### 自定义页脚
自定义了页脚的按钮,不需要默认确定取消按钮时，你可以把 footer 设为 null
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123'
  open={open} 
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
   footer={[
          <Button key="back">
            Return
          </Button>,
          <Button key="submit" type="primary">
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
          >
            Search on Google
          </Button>
        ]}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```
### 国际化
设置 okText 与 cancelText 以自定义按钮文字。
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123' 
  okText='confirm'
  cancelText='cancel'
  open={open} 
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```
### 自定义模态的宽度
使用 width 来设置模态对话框的宽度
```tsx
import React,{useState} from 'react';
import { Button,Spin,Check,Modal } from 'knowledge-mixer-design';

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick=()=>{
    setOpen(!open)
  }
return (
<div>
   <Button onClick={handleClick}>按钮</Button>
  <Modal title='123' 
  okText='confirm'
  cancelText='cancel'
  open={open} 
  width={1000}
  onOk={()=>{setOpen(!open)}}
  onCancel={()=>{setOpen(!open)}}
  >
    <Button title='标题' onClick={()=>{alert('你真的看到我了!!')}} >看到我了吗</Button>
  </Modal>
</div>
)
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cancelButtonProps |	cancel 按钮 props |	ButtonProps |	-- |	
| cancelText |	取消按钮文字 |	ReactNode |	取消 |	
| confirmLoading |	确定按钮 loading | boolean | false |	
| footer |	底部内容，当不需要默认底部按钮时，可以设为 footer={null} | ReactNode | (确定取消按钮)	
| getContainer |	指定 Modal 挂载的节点，但依旧为全局展示，false 为挂载在当前位置	HTMLElement | HTMLElement () => HTMLElement boolen | false |
| mask | 是否展示遮罩 |	boolean |	true |	
| maskClosable |	点击蒙层是否允许关闭 | boolean | true	|
| maskStyle |	遮罩样式 | CSSProperties |	-- |	
| okButtonProps |	ok 按钮 props |	ButtonProps |	--	|
| okText | 确认按钮文字	| ReactNode |	确定	|
| style |	可用于设置浮层的样式，调整浮层位置等 |	CSSProperties |	-- |	
| title |	标题 |	ReactNode |	--	|
| open |	对话框是否可见 | boolean |	-- |
| width |	宽度 |	string number |	520	|
| wrapClassName |	对话框外层容器的类名 |	string |	-- |	
| zIndex |	设置 Modal 的 z-index |	number |	1000 |
| onCancel |	点击遮罩层或右上角叉或取消按钮的回调 |	function(e) |	-- |	
| onOk |	点击确定回调 | function(e) |	-- |
