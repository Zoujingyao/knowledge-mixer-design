---
group:
  title: 规范
---

# GIT

设置了代码样式和[提交信息](https://npmmirror.com/package/es-commit-msg-validator) 的钩子：

```text
"gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "es-commit-msg-validator"
},
```

## 提交注释

统一采用带注释的提交方式，格式为：`<type>: <subject>`

```shell
(feature-xxx)$: git commit -m 'feat: 新增xx'
(fix-xxx)$: git commit -m 'fix: 修复xx'
```

其他类型：

- feat：添加新特性
- fix：修复 bug
- style：仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor：代码重构，没有加新功能或者修复 bug
- docs：仅仅修改了文档
- test：增加测试用例
- ci：持续集成相关
- chore：改变构建流程、或者增加依赖库、工具等
