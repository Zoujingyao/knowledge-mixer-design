---
title: PasswordItem 密码框
nav:
  title: Components 
  path: /components 
group:
  title: 数据录入
  path: /components/data-input
---

# PasswordItem 密码框

带气泡卡片的密码框，气泡卡片内实时提示校验信息 默认规则：

1. 长度为 6~20 个字符
2. 字母/数字以及标点符号至少包含 2 种
3. 不允许有空格、中文

支持自定义校验规则

## 代码演示

### 基本
```tsx
/**
 * description: 带默认校验规则。
 */
import React from 'react';
import { Form, Button } from 'antd';
import { PasswordItem } from 'knowledge-mixer-design'; // 通过包名引入，而不是相对路径

export default () => {
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ password: 'abc' }}
    >
      <PasswordItem
        name={'password'}
        label="初始密码"
        popoverProps={{
          placement: 'top',
        }}
      />
      <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
```

### 自定义
```tsx
/**
 * description: 支持自定义校验规则和气泡位置。
 */
import React from 'react';
import { Form, Button } from 'antd';
import { PasswordItem } from 'knowledge-mixer-design'; 

export default () => {
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ password: 'abc123' }}
    >
      <PasswordItem
        name={'password'}
        label="密码"
        rulesForCheckList={[
          {
            validator: (_, value) => {
              if (value.includes('gmm')) return Promise.resolve();
              return Promise.reject();
            },
            message: `包含'gmm'校验通过`,
          },
        ]}
        inputProps={{
          onChange: (e) => {
            console.log(e);
          },
        }}
        popoverProps={{
          placement: 'top',
        }}
      />
      <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
```

<API src="./index.tsx" ></API>
