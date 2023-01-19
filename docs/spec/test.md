---
group:
  title: 规范
---

# 测试

尽可能接入[react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
和 [Jest](https://github.com/facebook/jest)
完成组件测试，见[React组件的通用测试模式](https://reactjs.org/docs/testing-recipes.html) 。

## 测试用例

拿[组件-PasswordItem](../components/password-item)举例，列出六条测试用例：

- 在form中成功渲染一项自定义密码项
- 在form中成功渲染多项自定义密码项
- 默认校验规则下：用户输入时实时规则校验符合预期
- 默认校验规则下：输入内容不符合规则时阻断提交
- 自定义校验规则正常工作
- 自定义校验规则无效时组件表现符合预期

## 自动化

编程实现自动化组件测试， 以第三条测试用例为例：

首先渲染一个默认校验规则、初始值为abc的密码输入框：

```tsx | pure
render(
  <PasswordItem
    label="密码"
    inputProps={{
      defaultValue: 'abc',
      // @ts-ignore
      'data-testid': 'nut-password-form-item',
    }}
  />,
);
```

模拟用户将光标移到输入框内，此时气泡弹出，且只有第三条规则是满足了的，可以校验第三项复选框的状态为✅：

```typescript
input.focus();

// abc, 初始密码仅满足第三条规则，其他两条置灰
await rulesExpectToBeTruthy([2]);
```

`rulesExpectToBeTruthy`是自定义函数，校验入参中相应的规则下标对应的复选框状态是否为✅。

继续模拟输入def，此时同时满足了第一和第三条规则，校验一和三的状态都为✅：

```typescript
// 此时输入框内值为abcdef
await userEvent.type(input, 'def');

// 应该满足第一、三条规则
await rulesExpectToBeTruthy([0, 2]);
```

继续输入11，此时三条规则的状态都应该为✅：

```typescript
// abcdef11, 满足全部规则
await userEvent.type(input, '11');
await rulesExpectToBeTruthy([0, 1, 2]);
```

这是一条组件功能的正向测试用例。
