---
title: Modal
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
---

## Modal

Demo:

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
  <Modal title='123' getContainer={false} 
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